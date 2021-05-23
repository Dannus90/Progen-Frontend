# ProGen Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and `--template typescript` for a typescript base.


## Available Scripts

In the project directory, you can run:

### `yarn start-dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start`
This serves the build folder and is used for production

### `yarn test`
Launches the jest tests in the project which currently primarily test functionality and redux.
This is also tested in the gitlab pipeline through the command `test:ci` 

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Setup

### Code quality
The code quality is configured by a combination of eslint and prettier. To run code quality check and fix code layout run `yarn formatlint:fix`. In the pipeline the command `yarn lint:ci runs to check the code quality.`

### API Communcation
This project uses graphql and apollo. A middlelayer server is setup handling the communcation with the ProGen backend API. Queries are used to retrieve data and mutations are used to modify data. The image handling is directly communcating with the backend however. 

### Routing
The routing setup is made through RouteFactory, ApplicationRoutes and AuthRoutes. 

### Styling
Material UI is used for styling. Every component and screen has an index file wrapping it that holds all the styles for separation of concerns. These are passed down to the underlying component. 

### State management
Redux is used for state management and all the reducers are gathered in the root reducer. 

### ENV
The frontend requires env to be set for both the backend and the graphql apollo server. Check the .env.example for what is required to get up and running. 

### Translations
The project uses i18next for translations. The files used are added in the translations folder for each language and configuration setup using these files is made in `i18NextSetup.ts`

### Auth
The application routes that are protected are surrounded by an authwrapper that checks the validity of token life time. Data is protected in the backend by validating tokens. Refresh token funtionality is implemented and is requested when the token is about to expire/has expired. 