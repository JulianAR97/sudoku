

const initialState = {
  puzzle: '',
  solution: '',
  currSelected: '',
  mode: 'notes', // mode is either notes or input, notes for keeping track of possible inputs
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
    
    case 'SET_CURR_SELECTED':
      return {
        ...state,
        currSelected: action.id
      }
    
    // Switches mode from input to notes on button click
    case 'SET_MODE':
      let mode = state.mode === 'input' ? 'notes' : 'input'
      return {
        ...state,
        mode
      }
    
    default: 
      return state;
  }
}

export default puzzleReducer