import SudokuToolCollection from 'sudokutoolcollection'
const sudoku = SudokuToolCollection();

export const puzzleObjToArr = (puzzleObj) => {
  let puzzleStr = sudoku.conversions.objectToString(puzzleObj);
  let grid = sudoku.conversions.stringToGrid(puzzleStr);
  return grid
}

export const numToAlpha = (num) => {
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
  return conversion[num];
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

export const notMutable = (mutableInfo) => {
  const {cell, mutables} = mutableInfo
  return (mutables.indexOf(cell) === -1)
}