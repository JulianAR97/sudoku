// Define some valid sudoku puzzles as 'seeds'
// Shuffle values and transpose to create 'new' puzzles

//Easy

const e1 = [
  [0, 2, 4, 9, 0, 3, 6, 0, 0],
  [0, 3, 0, 7, 0, 5, 0, 4, 9],
  [5, 0, 0, 6, 0, 0, 0, 7, 0],
  [0, 0, 3, 4, 9, 1, 0, 0, 7],
  [4, 0, 1, 0, 5, 0, 8, 0, 3],
  [0, 0, 6, 3, 7, 0, 0, 0, 1],
  [0, 0, 0, 0, 4, 7, 0, 8, 0],
  [8, 0, 2, 5, 0, 0, 0, 0, 0],
  [0, 0, 7, 0, 0, 2, 0, 3, 5],
]

const e2 = [
  [0, 2, 0, 0, 0, 9, 0, 7, 0],
  [9, 8, 7, 3, 1, 0, 0, 0, 0],
  [0, 0, 6, 0, 8, 0, 2, 0, 0],
  [0, 0, 4, 0, 2, 0, 0, 6, 0],
  [2, 6, 3, 1, 9, 0, 0, 0, 4],
  [0, 7, 0, 0, 5, 4, 3, 1, 0],
  [0, 9, 0, 2, 4, 8, 1, 0, 0],
  [0, 3, 0, 0, 0, 1, 0, 2, 6],
  [0, 1, 0, 9, 0, 0, 0, 5, 0]
]

 export const easyPuzzles = [e1, e2];

// Medium

const m1 = [
  [7, 0, 0, 5, 0, 0, 9, 2, 0],
  [0, 6, 0, 1, 0, 0, 8, 0, 3],
  [9, 0, 5, 0, 2, 0, 4, 7, 6],
  [0, 4, 9, 0, 0, 1, 5, 0, 0],
  [0, 7, 3, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 4, 0, 8, 0],
  [0, 0, 0, 4, 0, 0, 0, 9, 0],
  [3, 2, 0, 0, 0, 0, 0, 8, 0],
  [5, 0, 6, 3, 0, 7, 0, 0, 0]
]

const m2 = [
  [8, 1, 4, 0, 0, 6, 7, 3, 2],
  [0, 0, 0, 0, 0, 0, 9, 0, 0],
  [6, 3, 0, 0, 0, 4, 0, 0, 0],
  [0, 6, 7, 0, 0, 8, 2, 0, 5],
  [9, 8, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 7, 1, 0, 6, 0],
  [0, 4, 0, 3, 0, 9, 1, 0, 0],
  [0, 0, 0, 8, 4, 7, 0, 5, 3],
  [0, 0, 0, 6, 0, 0, 0, 0, 0]
]

export const mediumPuzzles = [m1, m2];

// Hard 

const h1 = [
  [0, 4, 0, 0, 9, 0, 8, 0, 0],
  [0, 0, 9, 0, 2, 3, 4, 0, 0],
  [6, 3, 0, 7, 8, 0, 5, 0, 0],
  [0, 0, 0, 9, 0, 0, 0, 0, 0],
  [0, 0, 0, 8, 0, 0, 0, 0, 0],
  [0, 7, 4, 0, 0, 0, 0, 0, 3],
  [5, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 3, 0, 0, 0, 0, 0],
  [7, 8, 0, 0, 0, 2, 0, 9, 6]
]

const h2 = [
  [2, 0, 6, 0, 0, 0, 4, 0, 0],
  [0, 3, 0, 0, 0, 5, 0, 0, 0],
  [5, 0, 0, 8, 0, 0, 1, 6, 0],
  [0, 0, 0, 1, 0, 0, 2, 0, 0],
  [1, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 6, 0, 0, 0],
  [0, 0, 3, 5, 0, 0, 0, 7, 4],
  [0, 2, 0, 7, 0, 0, 6, 0, 0],
  [6, 0, 0, 0, 8, 0, 0, 3, 0],
]

export const hardPuzzles = [h1, h2]

// Expert

const ex1 = [
  [0, 2, 3, 0, 1, 0, 7, 8, 0],
  [7, 1, 0, 0, 0, 0, 6, 0, 0],
  [0, 0, 6, 4, 0, 3, 1, 0, 0],
  [0, 0, 0, 3, 2, 0, 0, 0, 0],
  [0, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 8, 0, 0, 0, 0],
  [0, 0, 0, 1, 5, 0, 0, 7, 0],
  [0, 0, 0, 0, 0, 0, 8, 3, 0],
  [8, 0, 4, 7, 0, 0, 5, 2, 0],
]

const ex2 = [
  [0, 0, 5, 0, 0, 4, 0, 7, 0],
  [7, 0, 0, 1, 0, 0, 8, 0, 0],
  [0, 0, 0, 0, 9, 0, 0, 0, 0],
  [2, 3, 0, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 9, 0, 7],
  [0, 0, 0, 9, 4, 0, 0, 0, 8],
  [0, 0, 4, 0, 0, 0, 0, 0, 0],
  [0, 5, 3, 0, 0, 0, 0, 0, 0],
  [9, 0, 8, 0, 7, 0, 0, 0, 4]
]

export const expertPuzzles = [ex1, ex2]