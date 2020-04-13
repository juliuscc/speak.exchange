import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { useMachine } from '@xstate/react'
import deckMachine, { containsDeckStates } from './deck-manager'
import { firebaseContext } from '../../FireBaseAuthProvider'

/**
 * A hook that listens to updates in the url. If the query parameter 'id' has
 * updated it will send messages to the state machine
 *
 * @param {string} state Curent state of state machine
 * @param {*} send Function to send messages to state machine
 * @param {string} id The value of the query parameter 'id'
 */
const useListenToIdUpdates = (state, send, id) => {
  const { value, context } = state

  useEffect(() => {
    if (value === 'empty' && id) {
      send('HAS_ID', { id })
    }
    if (containsDeckStates.some(cdmState => cdmState === value) && !id) {
      send('RESET')
    }
    if (
      containsDeckStates.some(cdmState => cdmState === value) &&
      id &&
      id !== context.currentId
    ) {
      send('RESET')
      send('HAS_ID', { id })
    }

    return () => {}
  }, [id])
}

/**
 * A hook that listens to page updates and removes error states so that the
 * application/state machine can 'restart'
 * @param {*} router The router object to listen to
 * @param {*} send Function to send messages to state machine
 * @param {string} status The current state of the state machine
 */
const resetErrorsOnPageUpdate = (router, send, status) => {
  useEffect(() => {
    const handleRouteChange = () => {
      if (status === 'failure') {
        send('RESET')
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [status])
}

const checkUser = (uid, deckUid) => {
  if (!uid) return 'none'
  if (uid === deckUid) return 'same'
  return 'other'
}

/**
 * A hook that synchronizes the state machine to page updates, and exposes
 * mutation functions.
 */
const useDeckManager = () => {
  const [state, send] = useMachine(deckMachine, { devTools: true })

  const router = useRouter()
  const { id } = router.query

  const fbContext = useContext(firebaseContext)
  const uid = fbContext?.user?.uid

  // Update deck depending on id in url query parameters
  useListenToIdUpdates(state, send, id)

  // Reset errors when changing page
  resetErrorsOnPageUpdate(router, state.value)

  const user = checkUser(uid, state.context.deck?.uid)

  // Local update functions
  const cancelEdit = () => send('CANCEL')

  const updateName = newName =>
    send('LOCAL_UPDATE', {
      updateType: 'updateName',
      payload: {
        newName
      }
    })

  const updateCard = cardIndex => (field, newValue) =>
    send('LOCAL_UPDATE', {
      updateType: 'updateCard',
      payload: {
        cardIndex,
        field,
        newValue
      }
    })

  const addCard = () => send('LOCAL_UPDATE', { updateType: 'addCard' })

  const removeCard = cardIndex => () =>
    send('LOCAL_UPDATE', {
      updateType: 'removeCard',
      payload: {
        cardIndex
      }
    })

  // Remote updates
  const submitChanges = () => send('SUBMIT')

  const createDeck = () => send('CREATE', { uid })

  const deleteDeck = () =>
    send({
      type: 'DELETE',
      id: 123,
      callback: () => router.push('/repeat')
    })

  const copyDeck = () => send('COPY', { uid })

  // Package state
  const showEdited = status => status === 'edited' || status === 'uploading'

  const { context } = state

  return {
    state: {
      status: state.value,
      deck: showEdited(state.value) ? context.editedDeck : context.deck,
      error: context.error,
      currentId: context.currentId,
      user
    },
    localActions: {
      updateName,
      updateCard,
      addCard,
      removeCard,
      cancelEdit
    },
    actions: {
      submitChanges,
      createDeck,
      deleteDeck,
      copyDeck
    }
  }
}

export default useDeckManager
