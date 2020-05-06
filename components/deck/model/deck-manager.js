import { Machine, assign } from 'xstate'
import Router from 'next/router'
import Deck from './Deck'

/**
 * This is a state machine, as fetching, updating and caching a deck over
 *  multiple page transitions is very complex.
 *
 * Visit https://xstate.js.org/viz/?gist=a1eb632d72c26fb090557d74b033585f for a
 * visualization of this state machine.
 *
 * The link is not updated to the most current state machine, but it is easier
 * to follow and understand. It is a good visual model for the state machine.
 */

const localUpdate = assign((context, event) => {
  const { updateType, payload } = event
  switch (updateType) {
    case 'updateName':
      return {
        editedDeck: context.editedDeck.updateName(payload.newName)
      }
    case 'updateCard':
      return {
        editedDeck: context.editedDeck.updateCard(
          payload.cardIndex,
          payload.field,
          payload.newValue
        )
      }
    case 'addCard':
      return { editedDeck: context.editedDeck.addCard() }
    case 'removeCard':
      return { editedDeck: context.editedDeck.removeCard(payload.cardIndex) }
    default:
      // Not supported action
      return {}
  }
})

const containsDeckEvents = {
  RESET: 'empty',
  DELETE: 'deleting'
}

const containsDeckMachine = {
  fetching: {
    entry: assign({ deck: null }),
    invoke: {
      id: 'getDeck',
      src: context => Deck.get(context.currentId),
      onDone: {
        target: 'resolved',
        actions: assign((_context, event) => ({ deck: event.data }))
      },
      onError: 'failure'
    },
    on: containsDeckEvents
  },
  resolved: {
    on: {
      LOCAL_UPDATE: {
        target: 'edited',
        actions: [
          assign(context => ({
            editedDeck: new Deck(
              context.deck.name,
              context.deck.cards,
              context.deck.uid,
              context.deck.createdAt
            )
          })),
          localUpdate
        ]
      },
      SUBMIT: {
        target: 'uploading',
        actions: assign(context => ({ editedDeck: context.deck }))
      },
      COPY: 'copying',
      ...containsDeckEvents
    }
  },
  edited: {
    on: {
      CANCEL: {
        target: 'resolved',
        actions: assign({ editedDeck: null })
      },
      LOCAL_UPDATE: {
        target: 'edited',
        actions: localUpdate
      },
      SUBMIT: 'uploading',
      ...containsDeckEvents
    }
  },
  uploading: {
    invoke: {
      id: 'updateDeck',
      src: context => context.editedDeck.submitChanges(context.currentId),
      onDone: {
        target: 'resolved',
        actions: [
          assign((_context, event) => ({
            deck: event.data,
            editedDeck: null
          })),
          context =>
            Router.push(
              `/view-deck?id=${context.currentId}&browseContext=${'repeat'}`
            )
        ]
      },
      onError: 'failure'
    },
    on: containsDeckEvents
  }
}

const initialContext = {
  currentId: null,
  deck: null,
  editedDeck: null,
  error: null
}

const deckMachine = Machine({
  id: 'deckMachine',
  initial: 'empty',
  context: initialContext,
  states: {
    empty: {
      entry: assign(initialContext),
      on: {
        HAS_ID: {
          target: 'fetching',
          actions: assign((_context, event) => ({ currentId: event.id }))
        }
      }
    },
    copying: {
      invoke: {
        src: (context, event) => context.deck.copy(event.uid),
        onDone: {
          target: 'fetching',
          actions: [
            assign((_context, event) => ({
              currentId: event.data
            })),
            (_context, event) => {
              const id = event.data
              Router.push(`/view-deck?id=${id}&browseContext=${'all-decks'}`)
            }
          ]
        }
      },
      onError: 'failure'
    },
    ...containsDeckMachine,
    deleting: {
      invoke: {
        src: context => Deck.delete(context.currentId),
        onDone: {
          target: 'empty',
          actions: () => Router.push('/repeat')
        },
        onError: 'failure'
      }
    },
    failure: {
      entry: assign((_context, event) => ({
        error: event.data.toString()
      })),
      on: {
        RESET: 'empty'
      }
    }
  }
})

export const containsDeckStates = Object.keys(containsDeckMachine)

export default deckMachine
