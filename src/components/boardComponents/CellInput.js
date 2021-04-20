import React, { useEffect } from 'react'
import '../../styles/board.css'

export const CellInput = (props) => {

  useEffect(() => {
    document.getElementById(props.id).focus()
  });

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