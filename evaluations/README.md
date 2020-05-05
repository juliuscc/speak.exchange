# Evaluations

The following details the changes we implemented based on our various evaluations.

<details>
  <summary>Table of contents</summary>
  
- [How is this folder structured?](#how-is-this-folder-structured)
- [User evaluations](#user-evaluations)
  - [Prototype](#prototype)
  - [Website](#website)
- [Peer reviews](#peer-reviews)
  - [Camilla Björn](#camilla-björn)
  - [Caroline Larsen](#caroline-larsen)
  - [Daniel Levy Trochez](#daniel-levy-trochez)
</details>

## How is this folder structured?

```
.
├── User Evaluations
│   └── Prototype User Evaluation.pdf
│   └── Website User Evaluation.pdf
├── Peer Reviews
│   ├── Camilla Björn.pdf
│   ├── Caroline Larsen.txt
│   ├── Daniel Levy Trochez.pdf

```

## User evaluations

We tested our website on two separate occasions with two separate people. Once using a prototype and once again using our functional website, later in the development process. The following are the changes we implemented based on these user evaluations. Our user evaluation PDF reports go into detail around our research question, methodology, testing script, results and recommendations.

### Prototype

Following the prototype user evaluation, we implemented the following changes:

- Made cards more visually evident that they can be edited by highlighting in grey the textboxes, as well as labelling respective fields as "original word" and "translation".
- Implemented deletion handling through a pop-up modal asking if a user is certain they would like to delete a deck.
- Flashcards feature an animated flip, and original words and translated words (opposite card 'faces') feature different colour backgrounds.
- Added headers to deliniate examples from definitions, etc.
- Removed 'saved words'; changed 'save word' functionality to 'add to deck' functionality on speak.exchange; added a modal to let user decide which deck to add a word to.
- Changed "start typing to search" to "search decks" on speak.repeat.
- Changed "browse decks" to "community decks" on speak.repeat.
- Implemented "play" and edit buttons to immediately review flashcards and edit decks respectively on speak.repeat.
- The user stays on the same deck page when saving edit changes on a deck.

We did not implement the following recommendation for the following reason:

- "Instead of ‘flip’, it should be called ‘reveal answer’": We instead implemented a "help" button to explain how speak.repeat worked, in case the conceptual model of a flashcard vocabulary trainer wasn't immediately evident to a user. We believe this helps solve the root issue of someone failing to understand how the review system worked.

### Website

Following the website user evaluation, we implemented the following changes:

- Fixed a bug that randomly appears that prevents a user from deleting a card.
- Implemented the ability for users to inverse the order of appearance of flashcard words, i.e. original word > translated word and vice versa.
- Made special character buttons more evident by highlighting each letter with a square background and on-hover highlighting.
- Made it more evident which deck a user is viewing by highlighting the sub-navbar items in bold.

We did not implement the following recommendations for the following reasons:

- "To prevent spelling typos, we should implement spelling suggestions with prompts such as 'did you mean ... ?'": This would require a rather robust algorithm that we believe is beyond the scope of this course and therefore this project, leading to us rejecting this recommendation; this is web development and not an algorithms course, after all.
- "Discuss the possibility of adding to each deck its author’s name"/"the possibility of adding to each deck the private/public option, edited by its owner": We consider privacy features and user attribution to be features that go beyond the primary purpose of speak.repeat and therefore the scope of this project.
- "Create a legend in some place of the website for the expressions that appear in the beginning of each translation": The API that we use based off of Word Reference does not provide us with the information required to describe the word classes of each word. Although possible to manually hard-code this data into the website, this is not scaleable nor easy to maintain in the long-run. The most optimal solution would be instead for the API to be updated in order to provide this information to minimise long-term disruption, e.g. were WordReference to change their word class scheme and/or word class definitions. We agreed that word classes are often technical and more useful for power users; not knowing what the word class of a word is does not affect an average user's understanding of a search result based on our use evaluations, therefore we believe that implementing hardcoded word class information goes beyond the primary purpose of speak.exchange and therefore the scope of this project.

## Peer reviews

The following are the changes we implemented based on three peer reviews that we received around the time of our mid-project review. The complete peer reviews can be found in the Peer Reviews directory.

### Camilla Björn

Following the recommendations of this peer review, we implemented the following changes:

- The search bar now has placeholder text "Start typing to search".
- Fixed the bug causing special character buttons staying pressed unless clicking away.
- Fixed search result text alignment.
- Implemented search result headers: see [Prototype](#prototype) for our implementation of search result headers.
- Pressing 'cancel' when adding a new deck now brings up a modal checking if a user is sure they would like to cancel making a new deck.
- Clicking speak.repeat brings you to the 'My Decks' page where a user can practice/edit their decks.
- User decks and community decks are separated to "My Decks" and "Browse Community Decks" pages.
- Fixed the reload-while-creating a deck bug.

We did not implement the following recommendations for the following reasons:

- "If you get more time you might therefore want to consider to add a page with explanations for the word classes": See [Website](#website) for our reasoning behind why we chose not to implement word class explanations.
- "Might be clearer to add a placeholder in the deck title box in the edit-deck view instead of the default title "Untitled Deck'": We believe that this is a very minor cosmetic recommendation that offers no real change to the use or usability of our website. In particular, we saw no obstructions to usability or complaints from our user evaluation testing, therefore we decided that this need not be implemented.
- For the sake of peer review and grading, we cannot add our firebase-config.js file to .gitignore as it is required to properly run the dev environment for our peers and instructors.

### Caroline Larsen

Following the recommendations of this peer review, we implemented the following changes:

- Added information on how to use speak.exchange and speak.repeat on their respective start pages.
- Made special characters more evident: see [Website](#website) for our implementation of special character button highlighting.
- Made sort/filter functions more evident by being more explicit about how each function worked on speak.repeat.

We did not implement the following recommendation for the following reason:

- "The functionality is good but when adding several entities to a deck, the deck gets very long and the user needs to scroll a lot. This makes it difficult for the user to get an overview of the complete deck. Maybe it doesn't have to be listed downwards, maybe you could find another way to present the entities": Given that this is a subjective opinion, we tested for this during our user evaluations and found no obstructions to usability or complaints from our participants, therefore we decided not to change how we presented cards in a deck.

Notes on certain comments:

- "Some input data will cause minor errors. For example when the input is the English word 'hello' some rows will only have a French sentence and some rows won't have a sentence at all": This is a direct result of the WordReference-based API we are using. We have no control over this and the same results are seen when using the WordReference website.

### Daniel Levy Trochez

Following the recommendations of this peer review, we implemented the following changes:

- Implemented an anchored search bar on speak.exchange.
- Implemented a 'go back' button when viewing a deck.
- Made error messages consistent across the website.
- Implemented the 'add to deck' feature taking word information from the web API using speak.exchange to decks on speak.repeat, satisfying the requirement of using remote data from a source to make collections.

We did not implement the following recommendation for the following reason:

- For the sake of peer review and grading, we cannot add our firebase-config.js file to .gitignore as it is required to properly run the dev environment for our peers and instructors.

Notes on certain comments:

- "Words can get mixed up in the bilingual dictionary. Almost as if the “French to English”/”English to French” setting is not applied... This might be the most serious of all of the things, since it then defeats the purpose of being a dictionary.": This is a direct result of the WordReference-based API we are using. We have no control over this and the same results are seen when using the WordReference website.
