import React from 'react';
import { connect } from 'react-redux'
import { notMutable } from '../../helpers/gameHelpers'
import { setCurrSelected, setInputSelected, setCellNote } from '../../actions/puzzleActions'
import NoteTable from './NoteTable'
import '../../styles/board.css'
import CellInput from './CellInput'
import {addOrRemoveFromArr} from '../../helpers/generalPurpose'

const Cell = (props) => {
  

  const cellNotes = props.cellNotes[props.inputID] 
  
  const renderTD = () => {
    // If the current selected cell is this instance of cell, or if the cell has a value 
    if (props.inputSelected === props.inputID || !!Number(props.cellValue)) {
      // We return input
      return (
        <CellInput 
          id={props.inputID} 
          value={props.cellValue === '.' ? '' : props.cellValue} 
          disabled={false} 
          handleChange={props.mode === 'input' ? props.handleChange : handleChange}
        />
      )
    } else {
      // Otherwise we return notes
      return (
        <NoteTable 
          cellNotes={cellNotes} 
        />
      )
    }
  }

  const handleChange = (event) => {
    let val = event.target.value;
    let newNotes = addOrRemoveFromArr(cellNotes, val);
    props.setCellNote({cellID: props.inputID, noteArr: newNotes})
    props.setInputSelected('')
  }

  const handleMutableClick = (event) => {
    props.setInputSelected(props.inputID)
  }
  
  const handleNonMutableClick = (event) => {
    if (props.currSelected !== event.target.id) {
      props.setCurrSelected(event.target.id)
    } else {
      props.setCurrSelected('')
    }
  }

  if (notMutable({cell: props.inputID, mutables: props.mutables})) {
    return (
      <td 
        className={`cell ${props.inputID}`} 
        onClick={handleNonMutableClick}
      >
        <CellInput 
          id={props.inputID} 
          value={props.cellValue} 
          disabled={true} 
        />
      </td>
    )
  } else {
    return (
      <td 
        className={`cell ${props.inputID}`} 
        onClick={handleMutableClick} 
        onKeyDown={props.handleKeyDown} 
        // tab index indicates element can be focused
        tabIndex="0"
      >
        {renderTD()}
      </td>
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