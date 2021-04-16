

const initialState = {
  puzzle: '',
  solution: '',
  selected: false,
  puzzleArr: [],
  mutables: [],
  puzzleObj: {}
}

const puzzleReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PUZZLE':
      return {
        ...state,
        puzzle: action.puzzleInfo.puzzle,
        solution: action.puzzleInfo.solution,
        puzzleArr: action.puzzleInfo.puzzleArr,
        puzzleObj: action.puzzleInfo.puzzleObj,
        mutables: action.puzzleInfo.mutables
      }
    
    default: 
      return state;
  }
}

export default puzzleReducer