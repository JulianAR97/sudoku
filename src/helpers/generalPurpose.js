export const uniqueArr = arr => {
  arr.filter((v, i, a) => a.indexOf(v) === i)
}

export const addClass = (target, klass) => {
  if (target.className.indexOf(klass) === -1 ) {
    target.classList.add(klass)
  }
  return target
}

export const removeClass = (target, klass) => {
  if (target.className.indexOf(klass) > - 1) {
    target.classList.remove(klass)
  }
  return target;
}

export const redHighlighting = (targetAndCandidates) => {
  const {target, candidates} = targetAndCandidates

  if (candidates.indexOf(target.value) === -1) {
    addClass(target, 'red')
  } 
  if (target.value === '') {
    removeClass(target, 'red')
  }

  return target;
}
