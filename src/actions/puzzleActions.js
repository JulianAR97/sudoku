
import SudokuToolCollection from 'sudokutoolcollection'
import { findMutables } from '../helpers/gameHelpers'


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
  const puzzleArr = sudoku.conversions.stringToGrid(puzzle);
  const solution = sudoku.solver.solve(puzzle);
  const puzzleObj =sudoku.conversions.stringToObject(puzzle)
  const mutables = findMutables(puzzleArr)
  let puzzleInfo = {puzzle, solution, puzzleArr, puzzleObj, mutables}
  return dispatch => {
    dispatch({type: 'SET_PUZZLE', puzzleInfo})
  }
}

export const setCurrSelected = (cellID) => {
  return dispatch => {
    dispatch({type: 'SET_CURR_SELECTED', cellID})
  }
}

export const setMode = () => {
  return dispatch => {
    dispatch({type: 'SET_MODE'})
  }
}

// props should be {cellID, noteArr (array of numbers)}
export const setCellNote = (props) => {
  return dispatch => {
    dispatch({type: 'SET_CELL_NOTE', props})
  }
}

export const setInputSelected = (cellID) => {
  return dispatch => {
    dispatch({type: 'SET_INPUT_SELECTED', cellID})
  }
}

export const setCookie = (userUUID) => {
  return dispatch => {
    dispatch({type: 'SET_COOKIE', userUUID})
  }
}

export const getScores = (userUUID) => {
  console.log('here' + userUUID)
  return dispatch => {
    fetch(`http://localhost:3001/users/${userUUID}/scores`)
      .then(resp => resp.json())
      // JSON object that is returned looks like [0: {time: '23:45'}...9: {time: '34:56'}]
      // So we map it to an array of only the values of the objects
      .then(json => json.map(score => Object.values(score)[0]))
      .then(scores => dispatch({type: "SET_SCORES", scores}))
  }
}