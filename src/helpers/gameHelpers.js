import SudokuToolCollection from 'sudokutoolcollection'
import { empty } from './generalPurpose'
const sudoku = SudokuToolCollection();

const conversion = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F',
  6: 'G',
  7: 'H',
  8: 'I'
}

export const puzzleObjToArr = (puzzleObj) => {
  let puzzleStr = sudoku.conversions.objectToString(puzzleObj);
  let grid = sudoku.conversions.stringToGrid(puzzleStr);
  return grid
}

export const numToAlpha = (num) => {
  return conversion[num];
}

export const alphaToNum = (alpha) => {
  for (let k in conversion) {
    if (conversion[k] === alpha) {
      return k;
    }
  }
}


// Checking for all '.' in original puzzle which indicate a null value
// Adding it to list of mutables to return and send from board to cell component as prop
export const findMutables = (puzzleArr) => {
  let mutables = [];

  for (let i = 0; i < puzzleArr.length; i++) {
    for (let j = 0; j < puzzleArr[i].length; j++) {
      if (puzzleArr[i][j] === '.') {
        let mutable = numToAlpha(i) + (j + 1)
        mutables.push(mutable)
      }
    }
  }
  return mutables
} 

export const isMutable = (mutableInfo) => {
  const {cell, mutables} = mutableInfo
  return (mutables.indexOf(cell) !== -1)
}

export const checkPuzzle = (puzzle) => {
  const {puzzleObj, solution} = puzzle;
  const puzzleStr = sudoku.conversions.objectToString(puzzleObj)
  if (puzzleStr === solution) {
    return true
  }
}

// Build own get candidates function 
// Because the one with sudoku doesn't work
export const getCandidates = (puzzleObj, cell) => {
  let cellRemoved = {...puzzleObj, [cell]: '.'}
  let puzzleArr = puzzleObjToArr(cellRemoved);
  let [rowAlpha, col] = cell.split('');
  let rowIdx = alphaToNum(rowAlpha);
  let colIdx = col - 1
  let candidates = [];
  // Need to these two values to array to handle the initial null value, as well as the value
  // That we get when an input is deleted
  candidates.push(puzzleArr[rowIdx][colIdx], '')
  if (candidates[0] === '.') {
    candidates.push(findCandidates({puzzleArr: puzzleArr, colIdx: colIdx, rowIdx: rowIdx}))
  }
  // Need to return a flat, one-dimensional array with all the values as strings
  // To match the event target value from input
  candidates.push()
  return candidates.flat().map(c => c.toString())
}

export const findCandidates = (puzzleInfo) => {
  const {puzzleArr, colIdx, rowIdx} = puzzleInfo;
  let candidates = [];
  candidates.push(findRowCandidates({puzzleArr: puzzleArr, rowIdx: rowIdx}))
  candidates.push(findColCandidates({puzzleArr: puzzleArr, colIdx: colIdx}))
  candidates.push(findBoxCandidates({puzzleArr: puzzleArr, rowIdx: rowIdx, colIdx: colIdx}))
  let sorted = candidates.flat().sort((a, b) => a - b)
  let filtered = sorted.filter(ele => sorted.lastIndexOf(ele) - sorted.indexOf(ele) === 2)
  return filtered.filter((v, i, a) => a.indexOf(v) === i);
}

/* 
-----------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------
 */


// findRow, findCol and findBox all call on findMissingNums helper to determine
// The difference between an array of numbers 1-9 and an array with some null values
// denoted by '.' elements

export const findRowCandidates = (puzzleInfo) => {
  const {puzzleArr, rowIdx} = puzzleInfo;
  
  return findMissingNums(puzzleArr[rowIdx])
}

export const findColCandidates = (puzzleInfo) => {
  const {puzzleArr, colIdx} = puzzleInfo;
  let col = [];
  for (let i = 0; i < puzzleArr.length; i++) {
    col.push(puzzleArr[i][colIdx])
  }
  return findMissingNums(col)
}

const findStart = num => {
  return num < 3 ? 0 : num < 6 ? 3 : 6
}

export const findBoxCandidates = (puzzleInfo) => {
  const {puzzleArr, rowIdx, colIdx} = puzzleInfo;
  let rowStart = findStart(rowIdx);
  let colStart = findStart(colIdx);
  const box = []

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      box.push(puzzleArr[rowStart + i][colStart + j])
    }
  }
  return findMissingNums(box)
}


export const findMissingNums = arr => {
  let nums = arr.filter(ele => ele !== '.');
  // Create an array with values 1-9
  let baseArr = [...Array(10).keys()].slice(1)
  let rem = [];

  for (let i = 0; i < baseArr.length; i++) {
    // Convert to string before finding index to match original array
    if (nums.indexOf(baseArr[i].toString()) === -1) {
      rem.push(baseArr[i])
    }
  }
  return rem;
}

export const getTime = () => {
  return document.getElementsByClassName('timer')[0].innerHTML
}

export const boardStateShouldUpdate = (localBoardState, reduxBoardState) => {
  return (empty(localBoardState) && !empty(reduxBoardState))
}

export const difficulties = ['easy', 'medium', 'hard', 'expert'] 

export const getNextKey = (key) => {
  const mutables = [...document.getElementsByClassName('mutable')]
  const ids = mutables.map(m => m.id)
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] === key) {
      return ids[i + 1] ? ids[i + 1] : ids[0]
    }
  }
}