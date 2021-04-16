import { connect } from 'react-redux'
import { notMutable } from '../../helpers/gameHelpers'
import { handleTDClick } from '../../helpers/generalPurpose'
import '../../styles/board.css'

const Cell = (props) => {

  const handleClick = (event) => {
    handleTDClick(event)
    event.target.classList.add('highlightGrey')
  }

  if (notMutable({cell: props.inputID, mutables: props.mutables})) {
    return (
      <td className="cell" onClick={handleClick}>
        <input id={props.inputID} type="text" maxLength="1" value={props.cellValue} disabled />
      </td>
    )
  } else {
    return (
      <td className="cell" >
        <input 
          id={props.inputID}
          type="text" 
          maxLength="1" 
          value={props.cellValue === '.' ? '' : props.cellValue} 
          onChange={props.handleChange}
        />
      </td>
    )
  }
  
}

const mapStateToProps = state => ({
  mutables: state.mutables
})


export default connect(mapStateToProps)(Cell)

// Todo:
/*
Only allow numbers to be inputted;
Select next available input
Set selected to false
Update state so that selected is true
Set selected back to false when listening

*/
