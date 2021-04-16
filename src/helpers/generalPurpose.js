export const uniqueArr = arr => {
  arr.filter((v, i, a) => a.indexOf(v) === i)
}

export const redHighlighting = (targetAndCandidates) => {
  const {target, candidates} = targetAndCandidates
  const className = target.className
  const redInCN = (className) => className.indexOf('red') > -1 


  if (candidates.indexOf(target.value) === -1 && !redInCN(className)) {
    target.classList.add('red')
  } 
  if (target.value === '' && redInCN(className)) {
    target.classList.remove('red')
  }

  return target;
}
// 3 cases
// 1 is that target val is '', which is when we remove highlightings
// 2 is that target val is not in candidates and we add highlights
// 3 is that target val 