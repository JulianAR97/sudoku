export const genClassName = (id, mutable) => {
  let className = 'cell';
  let [row, col] = id.split('');

  if (row === 'C' || row === 'F') { className += ' bb' }
  if (col === '4' || col === '7') { className += ' bl' }
  if (mutable) { className += ' mutable' }

  return className;
}

export const getParentId = (event) => {
  let ele = event.target
  let parent = ele.parentElement
  let gParent = parent.parentElement
  
  return ele.id ? ele.id : parent.id ? parent.id : gParent.id
}