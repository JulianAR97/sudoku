import Cell from './Cell'
import '../../styles/board.css'

const Row = (props) => {
  
  const renderCells = () => {
    // i + 1 will give input cells an id that corresponds to the puzzle object
    return props.rowValues.map((cellValue, i) => {
      const id = props.className + (i + 1)
      return (
        <Cell 
          key={i} 
          inputID={id} 
          handleKeyDown={props.handleKeyDown}
          cellValue={cellValue} 
        />
      )

    })
  }
  
  return (
    <tr className={`row ${props.className}`}>
      {renderCells()}
    </tr>
  )
}



export default (Row)