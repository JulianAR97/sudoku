import '../styles/board.css'
import { numToAlpha } from '../helpers/gameHelpers'
import Cell from '../components/boardComponents/Cell';

const Board = (props) => {
  
  const renderCells = (row, i) => {
    return row.map((cellValue, j) => {

      let row = numToAlpha(i)
      let cellNumber = j + 1;
      let id = row + cellNumber
      
      return (
        <Cell
          key={i + j}
          inputID={id}
          handleKeyDown={props.handleKeyDown}
          handleKeyUp={props.handleKeyUp}
          cellValue={cellValue}
        />
      )
    })
  }
  
  const renderRows = () => { 
    return props.puzzleArr.map((row, i) => {
      return (
        <div class="r">
          {renderCells(row, i)}
        </div>
      )
      
    })
  }

  return (

    <div id="board">
      {renderRows()}
    </div>

  )

}

export default Board;