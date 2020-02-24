# Plexus Technical Test

This project was created with, the documentation for which is [here](https://github.com/facebook/create-react-app).

## Getting Started

To start this app locally, run `yarn` inside the project folder to install the necessary dependencies, then `yarn start` to launch the app in development mode on port `8080`.

## Running Tests

To launch the innteractive test runner, run `yarn test` inside the project folder. The tests are written in [Jest](https://jestjs.io/) with [Testing Library](https://testing-library.com/docs/react-testing-library/intro), which allows them to interact with actual DOM nodes without needing the complex setup cost of Enzyme. Components in the `components` folder have unit tests included in an `index.test.js` file. More complex components such as those in the `pages` folder could be integration tested using Enzyme's `mount` functionality to allow them to be nested inside mocked `context` and `router` HOCs, thus prividing the functionality they require to run. However due to the relative complexity of setting this up, along with the fact that `react-hook-forms` (the library used to provide input state management and validation in this project) works entirely with hooks and is therefore very tricky to unit test, it might be more suitable to create end-to-end functional tests to run against these components instead.

## Deploying the App

This app is deployed on [Now](https://zeit.co/home). Provided you have the [Now CLI installed globally](https://zeit.co/download), editing the contents of the `now.json` file as appropriate and running `yarn deploy` will bundle the project for production and deploy it. You can leave Now to do the building and running on its own, but I've found this unreliable in the past so I prefer to build locally and deploy as a production-ready bundle.

## Architecture

In order to satisfy the constraints of having multiple form fields retain information about their state, it made sense to me to implement React's Context API as a single source of truth for the app. I prefer using Context over Redux for applications of this size because of the enormous reduction in boilerplate required. Once validation of all the fields on a page is successful, this is stored in the context store and becomes available at router level, meaning that the router can direct users back to the first page of the form if they attempt to access the second page by URL without completing the first part.

## Future Improvements

It would be nice to have some kind of global error handling to report errors back to the user on network request failures rather than just console logging them. I've also had problems with `randomuser.me` going down sporadically and of course, it would be good to increase test coverage.
