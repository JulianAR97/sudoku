import React, { Component } from 'react';
import { connect } from 'react-redux'
import Row from '../components/boardComponents/Row'
import '../styles/board.css'
import { puzzleObjToArr, numToAlpha } from '../helpers/gameHelpers'





class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boardState: this.props.puzzleObj,
    }
  }

  handleChange = (event) => {
    const key = event.target.id
    // Won't render if value is ''
    // Need to figure out why
    const value = event.target.value || '.'
    debugger;
    this.setState(prevState => ({
      ...prevState,
      boardState: {...prevState.boardState, [key]: value }
    }))
  }

  renderRows() {
    const puzzleArr = puzzleObjToArr(this.state.boardState)
    return puzzleArr.map((row, i) => {
      return <Row 
        handleChange={this.handleChange} 
        className={numToAlpha(i)} key={i} 
        rowValues={row} 
      />
    })
  }

  render() {
    console.log(this.state)

    return (
      <table id="board">
 
        {this.renderRows()}

      </table>
    )
  }

}

const mapStateToProps = state => ({
  puzzleObj: state.puzzleObj,
  solution: state.solution
})

export default connect(mapStateToProps)(Board);