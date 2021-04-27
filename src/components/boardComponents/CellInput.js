import React, { useEffect } from 'react'
import '../../styles/board.css'

export const CellInput = (props) => {

  useEffect(() => {
    document.getElementById(props.id).focus()
  });

  return (
    <div
      type="text" 
      maxLength="1" 
      value={props.value} 
      disabled={props.disabled}
    >
      {props.value}
    </div>

  )

}

export default CellInput