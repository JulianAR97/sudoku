export const uniqueArr = arr => {
  arr.filter((v, i, a) => a.indexOf(v) === i)
}