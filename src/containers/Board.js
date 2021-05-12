import '../styles/board.css'
import { numToAlpha } from '../helpers/gameHelpers'
import Cell from '../components/boardComponents/Cell';

const Board = (props) => {
  
  const renderCells = () => { 
    return props.puzzleArr.map((row, i) => {
      
      return row.map((cellValue, j) => {
        let row = numToAlpha(i)
        let cellNumber = j + 1;
        let id = row + cellNumber
        
        return (
          <Cell
            key={i + j}
            inputID={id}
            handleKeyDown={props.handleKeyDown}
            cellValue={cellValue}
          />
        )
      })
    })
  }

  return (

    <div id="board">
      {renderCells()}
    </div>

  )

}

export default Board;