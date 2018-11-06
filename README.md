# Movie_listings_Quest
--- Movie-Listing-Details

### Requirements
Using the TMDb API display a list of now showing movies allowing the user to filter by genre and rating.

Desired Output:
- Display a list of movies, each showing their title, genres and poster image.
- The movies should be ordered by popularity (most popular first - popularity property).
- Movies should be filterable by multiple genres, the user should have the ability to toggle movies depending on all of its assigned genres. For example if 'Action' and 'Drama' genres are selected listed movies must have both 'Action' and 'Drama' genres.
- Movies should also be filterable by their rating (vote_average property). i.e If rating was set to 5, you would expect to see all movies with a rating of 5 or higher.
- The input API's should only be called once.

------------*****------------*****------------*****------------*****------------*****------------

## Technical Choices
- Frontend framework: **React**
- State management: **Redux**
- Build tool: **Webpack**
- Tests: **Jest**
- Linter: **Eslint**

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

Installs and runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Styling
Due to timing constrains React Bootstrap and component styling has been preferred over SASS / stylesheets.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm build`

Build for production

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.


