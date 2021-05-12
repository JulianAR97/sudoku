import React, { useEffect } from 'react'
import '../../styles/board.css'

export const CellInput = (props) => {

  useEffect(() => {
    document.getElementById(props.id).focus()
  });

  return (
    <div
      className="fh centered"
      type="text" 
      maxLength="1" 
      value={props.value} 
      disabled={props.disabled}
    >
      <span>{props.value}</span>
    </div>

  )

}

export default CellInput