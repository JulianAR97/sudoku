import Row from '../components/boardComponents/Row'
import '../styles/board.css'
import { numToAlpha } from '../helpers/gameHelpers'

const Board = (props) => {

  const renderRows = () => { 
    return props.puzzleArr.map((row, i) => {
      return (
        <Row 
          handleChange={props.handleChange} 
          className={numToAlpha(i)} key={i} 
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