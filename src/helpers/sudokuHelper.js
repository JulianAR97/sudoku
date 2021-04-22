export const generatePuzzle = (difficulty) => {
  
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