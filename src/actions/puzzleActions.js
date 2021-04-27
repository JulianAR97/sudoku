
import SudokuToolCollection from 'sudokutoolcollection'
import { generatePuzzle } from '../helpers/sudokuHelper'
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

export const getUser = (cookie) => {
  return dispatch => {

    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({cookie})
    })
      .then(resp => resp.json())
      .then(userID => dispatch({type: "SET_USER_ID", userID: userID['id']}))
  }
  }
export const getPuzzle = (difficulty) => {
  // puzzle will be string of numbers with null squares being '.' ex: '1..2..8..4...3'
  const puzzleArr = generatePuzzle(difficulty);
  const puzzle = sudoku.conversions.gridToString(puzzleArr);
  const solution = sudoku.solver.solve(puzzle);
  const puzzleObj = sudoku.conversions.stringToObject(puzzle)
  const mutables = findMutables(puzzleArr)
  let puzzleInfo = {puzzle, solution, puzzleArr, puzzleObj, mutables, difficulty}
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
  debugger;
  return dispatch => {
    dispatch({type: 'SET_CELL_NOTE', props})
  }
}

export const setInputSelected = (cellID) => {
  return dispatch => {
    dispatch({type: 'SET_INPUT_SELECTED', cellID})
  }
}

export const getStats = (userID) => {
  return dispatch => {
    fetch(`http://localhost:3001/users/${userID}/stats`)
      .then(resp => resp.json())
      // JSON object that is returned looks like [0: {time: '23:45'}...9: {time: '34:56'}]
      // So we map it to an array of only the values of the objects
      .then(stats => dispatch({type: "SET_STATS", stats}))
  }
}

export const resetPuzzle = () => {
  return dispatch => {
    dispatch({type: 'RESET_PUZZLE'})
  }
}

export const sendScore = (props) => {
  const {userID, time, difficulty} = props
  return dispatch => {
    fetch(`http://localhost:3001/users/${userID}/scores`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({time, difficulty})
    })
      .then(resp => resp.json())
      .then(json => dispatch({type: 'RESET_PUZZLE'}))

  }
}