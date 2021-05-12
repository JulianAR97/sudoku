import React from 'react';
import { connect } from 'react-redux'
import { isMutable } from '../../helpers/gameHelpers'
import { setCurrSelected, setInputSelected, setCellNote } from '../../actions/puzzleActions'
import { genClassName, getParentId } from '../../helpers/cellHelpers'
import NoteTable from './NoteTable'
import CellInput from './CellInput'



const Cell = (props) => {
  const mutable = isMutable({cell: props.inputID, mutables: props.mutables})
  const className = genClassName(props.inputID, mutable);

  
  const renderTD = () => {
    // if the cell has a value 
    if (!!Number(props.cellValue)) {
      // We return input
      return (
        <CellInput 
          id={props.inputID} 
          value={props.cellValue === '.' ? '' : props.cellValue} 
          disabled={false} 
          // handleChange={props.mode === 'input' ? props.handleChange : handleChange}
        />
      )
    } else {
      // Otherwise we return notes
      return (
        <NoteTable 
          cellNotes={props.cellNotes[props.inputID]} 
        />
      )
    }
  }

  const handleNonMutableClick = (event) => {
    let id = getParentId(event)
    if (props.currSelected !== id) {
      props.setCurrSelected(id)
    } else {
      props.setCurrSelected('')
    }
  }

  if (isMutable({cell: props.inputID, mutables: props.mutables})) {
    return (
      <div
        id={props.inputID}
        className={className} 
        onKeyDown={props.handleKeyDown}
        onKeyUp={props.handleKeyUp}
        onClick={() => props.setInputSelected(props.inputID)}
        // onFocus={props.setInputSelected(props.inputID)}
        // tab index indicates element can be focused
        tabIndex={0}
        focused={props.inputID === props.inputSelected}
      >
        {renderTD()}
      </div>
    )
  } else {
    return (
      <div 
        id={props.inputID}
        className={className}
        onClick={handleNonMutableClick}
      >
        <CellInput 
          id={props.inputID} 
          value={props.cellValue} 
          disabled={true} 
        />
      </div>
    )
  }

}

const mapStateToProps = state => ({
  mutables: state.mutables,
  currSelected: state.currSelected,
  cellNotes: state.cellNotes,
  inputSelected: state.inputSelected,
  mode: state.mode
})


export default connect(mapStateToProps, {setInputSelected, setCurrSelected, setCellNote})(Cell)

// Todo:
/*
Only allow numbers to be inputted;
Select next available input
Set selected to false
Update state so that selected is true
Set selected back to false when listening

*/

// Option one: make cell backgorund color
// Option two: make notes under input