# Sudoku
This project will be hosted soon, but for now, you can test it by doing the following:

1. Clone this repository
2. Run `yarn install` to install dependencies
3. Run `yarn start` to start the server
4. Clone [backend repository](https://github.com/sudoku-backend)
5. Follow instructions in the ReadMe of that Repository

## Please Check Out
* [Sudoku Tool Collection](https://github.com/lacrioque/sudoku.js)
  * Solve sudoku puzzles
  * Convert puzzles from strings to objects and arrays

* [My Sudoku Helpers](https://github.com/JulianAR97/sudoku/blob/master/src/helpers/gameHelpers.js)
  * Find mutable sudoku cells based on generated puzzle
  * Get candidates function for a particular sudoku cell

## Important!
**The default port for the rails server is 3001 because this project runs on port 3000.  If you need to change the backend port for any reason, you must also change the port for all of the fetch calls in the actions directory of the this project**