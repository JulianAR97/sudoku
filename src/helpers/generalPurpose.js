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

const removeClassFromAll = (tag, klass) => {
  const elements = document.getElementsByTagName(tag);
  const eleArr = [...elements];
  eleArr.map(ele => {
    removeClass(ele, klass);
    return ele
  })
}

// const addClassToAll = (tag, klass) => {
//   const elements = document.getElementsByTagName(tag);
//   const eleArr = [...elements];
//   eleArr.map(ele => {
//     addClass(ele, klass);
//     return ele;
//   })
// }

const removeClassesFromAll = (tag, klassList) => {
  klassList.forEach(klass => removeClassFromAll(tag, klass))
}


export const handleTDClick = (event, currSelected) => {
  removeClassesFromAll(event.target.tagName, ['highlightGrey', 'green'])
  if (event.target.id !== currSelected) {
    const [letter, num] = event.target.id.split('')
    const value = event.target.value
    const inputs = document.getElementsByTagName('input')
    const inputsArr = [...inputs]
    inputsArr.map(input => {
      const [inpLetter, inpNum] = input.id.split('')
      const inpValue = input.value;
      if (inpLetter === letter || inpNum === num) {
        addClass(input, 'highlightGrey')
      }
      if (value === inpValue) {
        addClass(input, 'green')
      }
      return input;
    })
  }
}

export const addOrRemoveFromArr = (arr, ele) => {
  let idx = arr.indexOf(ele);
  if (idx > -1) {
    arr.splice(idx, 1);
    return arr;
  } else {
    arr.push(ele);
    return arr
  }
}