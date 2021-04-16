import React, {Component} from 'react';
import { getPuzzle } from './actions/puzzleActions'
import DifficultySelect from './components/DifficultySelect'
import Board from './containers/Board'
import { connect } from 'react-redux'

const difficulties = ['easy', 'medium', 'hard', 'very-hard', 'insane', 'inhuman']

class App extends Component{
  
  handleDifficultySelect = (e) => {
    this.props.getPuzzle(e.target.value)
  }

  render() {
    if (!!!this.props.puzzle) {
      return (
        <div className="App">
          <DifficultySelect difficulties={difficulties} handleClick={this.handleDifficultySelect} />
        </div>
      );
    }

    else {
      return (
        <div>
          <Board />
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  puzzle: state.puzzle
})

export default connect(mapStateToProps, {getPuzzle})(App);
