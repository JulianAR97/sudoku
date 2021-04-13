const initialState = {
  puzzle: '',
  solution: ''
}

const puzzleReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PUZZLE':
      return {
        ...state,
        puzzle: action.puzzleInfo.puzzle,
        solution: action.puzzleInfo.solution
      }
    
    default: 
      return state;
  }
}

export default puzzleReducer