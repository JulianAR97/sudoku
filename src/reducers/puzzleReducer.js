const initialState = {
  puzzle: '',
  solution: '',
  currSelected: '', // Refers to non-input cell
  inputSelected: '', // Refers to input cell
  mode: 'input', // mode is either notes or input, notes for keeping track of possible inputs
  puzzleArr: [],
  mutables: [],
  puzzleObj: {},
  cellNotes: {}
}

const puzzleReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PUZZLE':
      const mutables = action.puzzleInfo.mutables
      let cellNotes = {};
      
      for (let i = 0; i < mutables.length; i++) {
        let mute = mutables[i]
        console.log(mute)
        cellNotes[mute] = []
      }

      return {
        ...state,
        puzzle: action.puzzleInfo.puzzle,
        solution: action.puzzleInfo.solution,
        puzzleArr: action.puzzleInfo.puzzleArr,
        puzzleObj: action.puzzleInfo.puzzleObj,
        mutables,
        cellNotes
      }
    
    case 'SET_CURR_SELECTED':
      return {
        ...state,
        currSelected: action.cellID
      }
    
    // Switches mode from input to notes on button click
    case 'SET_MODE':
      let mode = state.mode === 'input' ? 'notes' : 'input'
      return {
        ...state,
        mode
      }
    
    case 'SET_CELL_NOTE':
      const {cellID, noteArr} = action.props
      return {
        ...state,
        cellNotes: {...state.cellNotes, [cellID]: noteArr}
      }
    
    case 'SET_INPUT_SELECTED':
      console.log(action.cellID)
      return {
        ...state,
        inputSelected: action.cellID

      }
    default: 
      return state;
  }
}

export default puzzleReducer