# Speak.exchange

[speak.exchange](https://www.speak.exchange 'Speak Exchange') is an online bilingual dictionary, which offers the accompanying app speak.repeat, which is a flashcard app geared towards learning new words in a foreign language.

![Screenshot of page showing the french translation for exchange](demo-screenshot.png)

<details>
  <summary>Table of contents</summary>
  
- [Features](#features)
- [How to setup page](#how-to-setup-page)
- [How is our project structured?](#how-is-our-project-structured)
  - [/components](#components)
  - [/pages](#pages)
  - [/utils](#utils)
  - [Miscellaneous](#miscellaneous)
- [Web App Link and Repository Link](#web-app-link-and-repository-link)
</details>

## Features

Bilingual dictionaries, translators and a plethora of other resources are critical for language learners around the world to improve their linguistic capabilities. These learners often face several obstacles when learning languages; in particular, their tools are often separated from one another, requiring language learners to have open multiple websites, devices or even books available and open at any given time. One essential part of the language learning process is learning vocabulary—these are often learned by language learners through the use of bilingual dictionaries and memorised using flashcards. Bilingual dictionaries like WordReference are a crucial tool that is often the first step towards understanding new words. Flashcards are a popular language learning tool whose utility has proven the success of websites like Quizlet and Memrise, as they empower language learners to retain new words that they learn.

Our application serves to facilitate a language learner's journey in studying a new language by combining these two tools into one website, separated into two apps: speak.exchange and speak.repeat.

### speak.exchange

speak.exchange enables users to easily and intuitively find translations of words from English to French and vice versa. If a word exists in both languages, a user can switch between the language direction of their search. Also, if a user cannot easily access special characters that they may need for their search, buttons to input special characters are made available to them to add to their search query.

### speak.repeat

speak.repeat provides users a way to retain the new words they have discovered on speak.exchange by saving these words into flashcards, which are collected into decks. A user is able to log in to our app using their Google account, giving them the option to add words that they find on speak.exchange into their own personal decks on speak.repeat. This allows users to save translations that they've already looked up to learn later using flashcards. A user can also peruse decks made by the speak.repeat community; from these decks, they are able to clone these decks to their own personal deck collection as well as practice them as flashcards, which saves users time and effort from creating similar decks that others have already made. If a user makes any mistakes, they can delete cards or even delete entire decks. All decks, whether community or personal, can be searched for through our deck search functionality, and can be sorted by creation date and alphabetical order.

When a user practices a flashcard deck, they are able to flip cards, move back and forth between cards, restart their practice and even switch the direction in which they would like the flashcard faces presented, i.e. from term to definition and vice versa.

This project is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## How to setup page

You can visit [speak.exchange](https://www.speak.exchange) for the most current version of the page, or setup the page locally. To setup the page locally you have to have [Node.js](https://nodejs.org/en/) installed.

Begin by installing all dependencies by running the following command:

```
npm install
```

Then build and serve the page by running the following command:

```
npm run ci-build && npx serve out
```

The page is now available on [localhost:5000](http://localhost:5000), or on the IP-address in the terminal. If your mobile device is connected to the same network you can use the IP-address to visit the page using your mobile device.

## User evaluations

We have conducted two user evaluations. One for a prototyped version of the application, and one for a live version of the application. Additionally the application has been peer reviewed. For the results of these three evaluations, and what changes we implemented because of them, see [Evaluations](evaluations).

## How is our project structured?

```
.
├── .github
│   └── workflows
│       └── push.yml
├── components
│   ├── browse-decks
│   │   ├── model
│   │   |   ├── DeckList.js
│   │   |   └── useDeckList.js
│   │   ├── BrowseDecks.js
│   │   ├── DeckBox.js
│   │   ├── DeckSearch.js
│   │   ├── ViewBar.js
│   │   ├── WelcomeRepeat.js
│   │   └── withBrowseDecks.js
│   ├── deck
│   │   ├── model
│   │   |   ├── deck-manager.js
│   │   |   ├── Deck.js
|   |   |   └── useDeckManager.js
│   │   ├── EditDeck.js
│   │   ├── RunDeck.js
│   │   ├── ViewDeck.js
│   │   ├── withDeck.js
│   │   ├── WordCard.js
│   │   └── WordCardEdit.js
│   ├── exchange
│   │   ├── AddToDeckModal.js
│   │   ├── SearchBar.js
│   │   ├── SearchExchange.js
│   │   ├── Translation.js
│   │   ├── useSearchTranslation.js
│   │   └── Welcome.js
│   ├── ui-fragments
│   │   ├── Button.js
│   │   ├── Container.js
│   │   ├── ErrorBox.js
│   │   ├── Input.js
│   │   ├── LoggedInView.js
│   │   ├── LogInButton.js
│   │   ├── Modal.js
│   │   ├── Navbar.js
│   │   ├── Spinner.js
│   │   └── StyledLink.js
│   ├── DeckContextProvider.js
│   ├── DeckListContextProvider.js
│   ├── FireBaseAuthProvider.js
│   ├── Meta.js
│   └── Page.js
├── evaluations
│   ├── Peer Reviews
│   │   ├── Camilla Björn.pdf
│   │   ├── Caroline Larsen.txt
│   │   └── Daniel Levy Trochez.pdf
│   ├── User Evaluations
│   │   ├── Protoype User Evaluation.pdf
│   │   └── Website User Evaluation.pdf
│   └── README.md
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── all-decks.js
│   ├── edit-deck.js
│   ├── index.js
│   ├── repeat.js
│   ├── run-deck.js
│   └── view-deck.js
├── public
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── browserconfig.xml
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── mstile-150x150.png
│   ├── nprogress.css
│   ├── safari-pinned-tab.svg
│   ├── site.webmanifest
│   └── wordcloud.png
├── utils
│   ├── api-config.js
│   ├── debounce.js
│   ├── firebase-config.js
│   ├── screen-sizes.js
│   ├── theme.js
│   └── useToggle.js
├── LICENSE
├── README.md
├── demo-screenshot.png
├── package-lock.json
└── package.json
```

Components are divided into directories based on functionality. The ([components](#/components)) sub-directories contain both stateless presentational components and their equivalent container components that maintain state and business logic. They also contain custom hooks. In the sub-directory `/ui-fragments` we place presentational components that are highly reusable. Additionally, there is one directory for our pages ([pages](#/pages)), reusable utility functions ([utility](#/utils)), and any public assets (public). All other files are non-essential and exist for documentation, package management, ci-configuration, or similar (see [Miscellaneous](#Miscellaneous)).

### /components

This directory is for presentational and container components, as well as hooks.

- **DeckContextProvider.js** Provides context for the currently viewed Deck. The current deck is saved in context as it should persist over route transitions.
- **DeckListContextProvider.js** Provides context for the currently viewed DeckList. The current deck list is saved in context as it should persist over route transitions.
- **FireBaseAuthProvider.js:** Provides user auth context.
- **Meta.js:** Holds HTML header `<head>...</head>` information.
- **Page.js:** Wrapper for all page components, providing a theme provider, and firebase context etc.

#### browse-decks

This directory provides components for browsing decks. Either all decks or only your decks.

- **BrowseDecks.js** Presentational component for speak.repeat my decks(start) page and browse page.
- **DeckBox.js:** A card component, representing a deck.
- **DeckSearch.js** Search sidebar presented in speak.repeat.
- **ViewBar.js:** The viewbar below the navigation bar in speak.repeat.
- **WelcomeRepeat.js:** Landing repeat page if user doesn't have any decks.
- **withBrowseDecks.js:** Container component for both browse community decks and browse my decks.

#### browse-decks/model

- **DeckList.js:** A model for DeckList. It abstracts away Firebase.
- **useDeckList.js** A hook for accessing DeckList, and creating a new deck.

#### deck

This directory provides components for viewing and editing specific decks.

- **EditDeck.js** Presentational component for edit-deck view.
- **RundDeck.js:** Presentational component for run deck view
- **ViewDeck.js:** Presentational compononent for view-deck view.
- **withDeck.js:** "Glue function" that creates the container component for edit and view deck.
- **WordCard.js:** A presentational component for a card in a deck.
- **WordCardEdit.js:** A presentational component for an editable card in a deck.

#### deck/model

- **deck-manager.js:** A state machine that contains all complex logic of maintaining a deck, and all state it can be in (not fetched, fetched, edited, error, etc.).
- **Deck.js** A model for Deck. It contains immutable methods for doing local updates and CRUD (Create Read Update Delete) operations. It also abstracts away Firebase.
- **useDeckManager.js** A hook for using deck-manager. It exposes the states of the state machine and functions for interacting with the state machine. It also creates event listeners to the router that can update the state machine.

#### exchange

This directory provides components for the translation page.

- **AddToDeckModal.js** Modal for adding a word to a deck from speak.exchange
- **SearchBar.js** The search bar component used in speak.exchange.
- **SearchExchange.js** Container component for the search logic in speak.exchange
- **Translation.js:** The translation results component.
- **useSearchTranslation.js:** The hook used in `Translation`.
- **Welcome.js** Welcome text for speak.exchange

#### ui-fragments

This directory provides reusable components that are used in many places.

- **Button.js:** Reusable presentational component for buttons
- **Container.js:** A CSS layout component, which provides sensible margins that adapt to the screen size.
- **ErrorBox.js:** Reusable presentational component for error handling.
- **Input.js:** Reusable presentational component for input fields
- **LoggedInView.js:** A HOC component, that only renders it's child if the user is logged in, and provides the user as a prop. It will render a message to the user to log in if the user is not logged in.
- **LogInButton.js:** Presentational component for log in pop-up component.
- **Modal.js** Reusable modal component
- **Navbar.js:** Reusable presentational component for the navigation bar.
- **Spinner.js:** Reusable presentational component for a spinner.
- **StyledLink.js** A component that styles a page link reused

### /evaluations

This directory includes both of the user evaluation reports as well as the peer reviews from the mid-project review. The README of the directory summarizes the reports and the reviews as well as clearly explains the changes impelemented based on the feedback from the peer reviews and the user evaluations.

- **Peer Reviews:** Containts the peer review reports.
- **User Evaluations:** Containts the user evaluation reports.
- **README.md:** Contains a summery of the reports and the changes implemented.

### /pages

This directory is where we keep all pages. Next handles routing between them, so that is why you won't find anywhere where they are composed into one. Every file corresponds to a page, and the file name decides what route they are served at.

> When a visitor visits `/repeat`, they will be served `repeat.js`

\_app.js and \_document.js contain wrapper components that are used to compose the different pages into one app. Usually, you don't have to add these files as Next handles this, but we want to overwrite them to maintain state between pages, and to server-side render stylesheets.

- **\_app.js:** Contains code defining global attributes like global style and header information
- **\_document.js:** An overwritten wrapper component that enable us to server-side render styled components
- **all-decks.js:** Initialises the browse all comunity decks page
- **edit-deck.js:** Initialises the editdeck page
- **index.js:** Initialises the start page, i.e. speak.exchange
- **repeat.js:** Initialises the browse my deck page/speak.repeat start page
- **run-deck.js:** Initialises the run deck page
- **view-deck.js:** Initialises the view deck page

### /utils

- **api-config.js:** Contains remote API information.
- **debounce.js:** Provides a debounce function consolidates user inputs into resulting in fewer API calls.
- **firebase-config.js:** Contains firebase configurations and code that initiates firebase.
- **screen-sizes.js:** A list of different standardized screen sizes used throughout the project.
- **theme.js:** Sets the style scheme used throughout the project.
- **useToggle.js:** Reusable state toggle.

### Miscellaneous

- **/.github/workflows/push.yml:** Defines what actions should be executed when code is pushed to the master branch. This includes linting, building, and publishing to GitHub pages.
- **/public:** Directory that contains images and other static assets.
- **.eslintignore:** Files/folders to be ignored by eslint.
- **.gitignore:** Files to be ignored by git.
- **README.md:** A description of our project.
- **demo-screenshot.png:** A screenshot of the web page, that is included in `README.md`.
- **LICENSE:** License and copyright.
- **package-lock.json:** Includes all necessary libraries.
- **package.json:** Includes all necessary libraries, tool configuration, and other project-specific meta-data.

## Web App Link and Repository Link

- **Web Link:** [speak.exchange](https://speak.exchange)
- **Git Repository:** https://github.com/juliuscc/speak.exchange.git
