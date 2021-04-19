import '../../styles/board.css'

const CellInput = (props) => {
  return (
    <input 
      id={props.id} 
      type="text" 
      maxLength="1" 
      value={props.value} 
      disabled={props.disabled}
      onChange={props.handleChange}
    />

  )
}

export default CellInput