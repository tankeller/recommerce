# Overview

Trying to build a React Storefront that can be used on different Storefronts.

Similar to Vue-Storefront: https://demo.vuestorefront.io/ or
Shopware 6 Standard: https://www.shopwaredemo.store/

Project uses Storybook for independent component development. More information below.

Third Party libraries:
emotion for styling components: https://emotion.sh/docs/styled
Storybook to display components: https://storybook.js.org/docs/basics/introduction/
Reach Router: https://reach.tech/router/example/basic

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Installation

- git clone project
- move into project directory
- Install node_modules with `npm install`
- Then either start the shop app or storybook, see `Available Scripts`below

---

## Storybook

Every component should have stories with all states.

### Storybook Addons/Plugins

#### Knobs

Allows to create dynamic values in the stories.

https://github.com/storybookjs/storybook/tree/master/addons/knobs

#### Docs

Automatically adds a Docs Tab to every component which shows all props and more.

https://github.com/storybookjs/storybook/tree/master/addons/docs

#### Actions

Storybook Addon Actions can be used to display data received by event handlers.

https://www.npmjs.com/package/@storybook/addon-actions

---

## Available Scripts

In the project directory, you can run:

### `npm start` - Run the Shop app

Runs the shop app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run storybook` - Run the Storybook app

Starts the Storybook application

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
