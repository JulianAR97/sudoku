import { addOrRemoveFromArr } from '../helpers/generalPurpose'

const initialState = {
  puzzle: '',
  solution: '',
  currSelected: '',
  mode: 'notes', // mode is either notes or input, notes for keeping track of possible inputs
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
      console.log(cellNotes)

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
      const {cellID, number} = action.props
      const prevNoteArr = state.cellNotes[cellID]
      let noteArr = addOrRemoveFromArr(prevNoteArr, number)
      return {
        ...state,
        cellNotes: {...state.cellNotes, [cellID]: noteArr}
      }
    
    default: 
      return state;
  }
}

export default puzzleReducer