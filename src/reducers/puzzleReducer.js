const initialState = {
  userUUID: '',
  puzzle: '',
  difficulty: '',
  solution: '',
  currSelected: '', // Refers to non-input cell
  inputSelected: '', // Refers to input cell
  mode: 'input', // mode is either notes or input, notes for keeping track of possible inputs
  puzzleArr: [],
  mutables: [],
  scores: [],
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
        cellNotes[mute] = []
      }

      return {
        ...state,
        puzzle: action.puzzleInfo.puzzle,
        solution: action.puzzleInfo.solution,
        puzzleArr: action.puzzleInfo.puzzleArr,
        puzzleObj: action.puzzleInfo.puzzleObj,
        difficulty: action.puzzleInfo.difficulty,
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
      return {
        ...state,
        inputSelected: action.cellID

      }

    case 'SET_COOKIE':
      return {
        ...state,
        userUUID: action.userUUID
      }

    case 'SET_SCORES':
      const scores = !action.scores.length ? [null] : action.scores
      return {
        ...state,
        scores
      }
    
    case 'RESET_PUZZLE':
      return {
        ...state,
        puzzle: '',
        difficulty: '',
        solution: '',
        currSelected: '',
        mode: 'input',
        puzzleArr: [],
        mutables: [],
        scores: [],
        puzzleObj: {},
        cellNotes: {}
      }

    default: 
      return state;
  }
}

export default puzzleReducer