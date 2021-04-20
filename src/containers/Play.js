import React, {Component} from 'react';
import { getPuzzle } from '../actions/puzzleActions'
import DifficultySelect from '../components/DifficultySelect'
import Board from './Board'
import { connect } from 'react-redux'

const difficulties = ['easy', 'medium', 'hard', 'very-hard', 'insane', 'inhuman']

class Play extends Component {
  handleDifficultySelect = (e) => {
    this.props.getPuzzle(e.target.value)
  }

  render() {
    if (!!!this.props.puzzle) {
      return (
        <>
          <DifficultySelect difficulties={difficulties} handleClick={this.handleDifficultySelect} />
        </>
      )
    } else {
      return (
        <>
          <Board />
        </>
      )
    }
  }
}

const mapStateToProps = state => ({
  puzzle: state.puzzle
})

export default connect(mapStateToProps, {getPuzzle})(Play);