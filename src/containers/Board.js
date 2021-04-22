import React, { Component } from 'react';
import { connect } from 'react-redux'
import Row from '../components/boardComponents/Row'
import '../styles/board.css'
import { puzzleObjToArr, numToAlpha, checkPuzzle, getCandidates } from '../helpers/gameHelpers'
import { redHighlighting } from '../helpers/generalPurpose'
import { postScore } from '../helpers/user'
import { getTime } from '../helpers/gameHelpers'


class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boardState: this.props.puzzleObj,
    }
  }

  handleChange = (event) => {
    const candidates = getCandidates(this.state.boardState, event.target.id)
    redHighlighting({target: event.target, candidates})
    const key = event.target.id
    // Won't render if value is ''
    // Need to figure out why
    const value = event.target.value || '.'
    this.setState(prevState => ({
      ...prevState,
      boardState: {...prevState.boardState, [key]: value }
    }))
    
  }

  renderRows() {
    const puzzleArr = puzzleObjToArr(this.state.boardState)
    return puzzleArr.map((row, i) => {
      return (
        <Row 
          handleChange={this.handleChange} 
          className={numToAlpha(i)} key={i} 
          rowValues={row} 
        />
      )
    })
  }


  render() {
    if (checkPuzzle({puzzleObj: this.state.boardState, solution: this.props.solution})) {
      postScore(getTime(), this.props.userUUID )
    } else {
      return (
        <>
          <table id="board">
            <tbody>

              {this.renderRows()}
            </tbody>
    
          </table>
        </>

      )
    }

  }

}

const mapStateToProps = state => ({
  puzzleObj: state.puzzleObj,
  solution: state.solution,
  mode: state.mode,
  inputSelected: state.inputSelected,
  userUUID: state.userUUID,
})

export default connect(mapStateToProps)(Board);