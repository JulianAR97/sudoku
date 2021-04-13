
import SudokuToolCollection from 'sudokutoolcollection'
const sudoku = SudokuToolCollection();

/* 
Difficulty levels:

"easy":         62
"medium":       53
"hard":         44
"very-hard":    35
"insane":       26
"inhuman":      17

Can also generate a specific number of squares by passing in an integer as an argument
*/
export const getPuzzle = (difficulty) => {
  // puzzle will be string of numbers with null squares being '.' ex: '1..2..8..4...3'
  const puzzle = sudoku.generator.generate(difficulty);
  const solution = sudoku.solver.solve(puzzle);
  let puzzleInfo = {puzzle, solution}
  debugger;
  return dispatch => {
    dispatch({type: 'SET_PUZZLE', puzzleInfo})
  }


}
