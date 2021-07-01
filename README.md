# Tom's OMDB Movie Favs App:
A React app using OMDB Api for search and infinite scroll on the UI.

## Deploy
- Live @: http://tomgalpin.github.io/movie-favs-app
  - From: https://github.com/gitname/react-gh-pages

## Requirements:
  1. Search for movies
  2. Render the results.  Add in infinite scroll for additional Api calls/pagination.
  3. Add movies to a playlist.  
  4. View/confirm movies in playlist.
  5.  Use OMDB Api: https://www.omdbapi.com.  Not going to worry about putting API Key in an .env var.

## Notes:
  1. I ran out of energy to fully write tests for `pages/search`.  Same for some of the other components.
  2. Same to address all potential use cases within the search functionality.
  3. Improvements to be made:  
  
    - Refactor `pages/search`.
    - Full suite of tests for `pages/search` (and each component)
    - Address all edge cases for search functionality.
    - Move "playlist" storage from global store to a DB.
    - Click on a movie card to show full movie details.
    - Remove/delete movies from the playlist.
    - Reorder playlist and add additional flags to each item in the playlist, e.g. "has seen," a "personal rating," etc..
    - Improve designs and UI.
    - Caching results to avoid additional api calls that were already made.
    - Error handling of search.

## Test Coverage:
---------------------|---------|----------|---------|---------|-------------------
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------|---------|----------|---------|---------|-------------------
All files | 87.5 | 60 | 81.82 | 86.84 |
assets/styles | 0 | 100 | 100 | 0 |
globals.js | 0 | 100 | 100 | 0 | 4
components/header | 100 | 100 | 100 | 100 |
styled-header.js | 100 | 100 | 100 | 100 |
components/movie | 86.96 | 62.5 | 75 | 86.36 |
movie.js | 81.25 | 75 | 66.67 | 80 | 19,24,50
styled-movie.js | 100 | 50 | 100 | 100 | 46-63
pages/app | 100 | 100 | 100 | 100 |
styled-app.js | 100 | 100 | 100 | 100 |
pages/playlist | 92.31 | 50 | 100 | 91.67 |
playlist.js | 90 | 50 | 100 | 88.89 | 21
styled-playlist.js | 100 | 100 | 100 | 100 |
---------------------|---------|----------|---------|---------|-------------------


## Structure
    .
    ├── /public
    │     └── favicon.ico
    │     └── index.html
    │     └── manifest.json
    │     └── robots.txt
    ├── /src
    │     ├──/assets
    │     │     ├── /images
    │     │     │      └── image-not-found.png
    │     │     └── /styles
    │     │           ├── _variables.js
    │     │           ├── _globals.js
    │     │           └── reset.js
    │     ├── /components
    │     │     ├── /header
    │     │     │      ├── header.js
    │     │     │      ├── header.test.js
    │     │     │      └── styled-header.js
    │     │     ├── /movie
    │     │     ├── /movies-grid
    │     │     ├── /search-bar
    │     │     └── /search-title
    │     ├── /pages
    │     │     ├── /app
    │     │     │      ├── app.js
    │     │     │      ├── app.test.js
    │     │     │      └── styled-app.js
    │     │     ├── /playlist
    │     │     └── /search
    │     ├── /store
    │     │     ├── index.js
    │     │     └── playlist.js
    │     ├── /test
    │     │     ├── _mockStore_.js
    │     │     └── test-utils.js
    │     ├── index.js
    │     └── setUpTest.js
    ├── package.json
    └── README.md

---
---
---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
