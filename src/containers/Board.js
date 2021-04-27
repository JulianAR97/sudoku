import Row from '../components/boardComponents/Row'
import '../styles/board.css'
import { numToAlpha } from '../helpers/gameHelpers'

const Board = (props) => {

  const renderRows = () => { 
    return props.puzzleArr.map((row, i) => {
      return (
        <Row 
          key={i} 
          handleKeyDown={props.handleKeyDown} 
          className={numToAlpha(i)} 
          rowValues={row} 
        />
      )
    })
  }

  return (

    <table id="board">
      <tbody>
        {renderRows()}
      </tbody>
    </table>

  )

}

export default Board;