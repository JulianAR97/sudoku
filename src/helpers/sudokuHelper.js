export const generatePuzzle = (difficulty) => {
  const seed = selectPuzzle(difficulty);
  const conversion = numberMap();
  const mapped = mapAndConvertToStrings(seed, conversion);
  debugger;
  const transposed = transpose(mapped);
  return transpose(transposed)

}

// switches rows and columns in 2d array (matrix)
const transpose = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      let t = array[i][j];
      array[i][j] = array[j][i]
      array[j][i] = t
    }
  }
  return array
}

// Mapping 1-9 to another value between 1 and 9 and holding in object
const numberMap = () => {
  let mapped = {}
  const shuffled = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  shuffled.forEach((ele, i) => mapped[i + 1] = ele)
  return mapped;
}

//Fisher-Yates Shuffle
const shuffle = (array) => {
  // i is index, t is temp holder
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m]
    array[m] = array[i]
    array[i] = t;
  }
  return array;
}

const mapAndConvertToStrings = (array, conversion) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      array[i][j] === 0 ? array[i][j] = '.' : array[i][j] = conversion[array[i][j]].toString()
    }
  }
  return array;
}

const selectPuzzle = (difficulty) => {
  const seeds = diffToPuzzles[difficulty];
  const seed = seeds[Math.floor((Math.random() * seeds.length))]
  return seed;
}



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

const easyPuzzles = [e1];

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
  [5, 0, 6, 3, 0, 7, 0, 0, 0],
]

const mediumPuzzles = [m1];

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

const hardPuzzles = [h1]

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

const expertPuzzles = [ex1]

const diffToPuzzles = {
  'easy': easyPuzzles,
  'medium': mediumPuzzles,
  'hard': hardPuzzles,
  'expert': expertPuzzles
}

