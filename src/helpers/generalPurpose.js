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

export const removeClassFromAll = (tag, klass) => {
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
  removeClassesFromAll(event.target.tagName, ['green'])
  if (event.target.id !== currSelected) {
    const value = event.target.value
    const inputs = [...document.getElementsByTagName('input')]
    inputs.map(input => {
      const inpValue = input.value;
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

// Takes seconds '127' and returns stopwatch '02:07'
export const stopWatch = (seconds) => {
  const [mins, secs] = [Math.floor(seconds / 60), seconds % 60];
  const minsString = mins < 10 ? `0${mins}` : `${mins}`;
  const secsString = secs < 10 ? `0${secs}` : `${secs}`;
  return `${minsString}:${secsString}`
}

export const empty = (object) => {
  return Object.keys(object).length === 0
}


export const greenHighlighting = (currSelected) => {
  const cell = document.getElementById(currSelected)
  removeClassesFromAll(cell.tagName, ['green'])
  const inputs = [...document.getElementsByTagName('input')]
  inputs.map(input => {
    if (input.value === cell.value) {
      addClass(input, 'green')
    }
    return input;
  })
}