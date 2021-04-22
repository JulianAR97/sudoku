import React, {Component} from 'react';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getPuzzle } from '../actions/puzzleActions'
import DifficultySelect from '../components/DifficultySelect'
import Board from './Board'
import Timer from '../components/Timer'

const difficulties = ['easy', 'medium', 'hard', 'very-hard', 'insane', 'inhuman']

class Play extends Component {
  
  handleDifficultySelect = (e) => {
    this.props.getPuzzle(e.target.value)
  }

  renderBoardOrDifficulty = () => {
    if (this.props.puzzle === '') {
      return (
        <DifficultySelect difficulties={difficulties} handleClick={this.handleDifficultySelect} />
      )   
    } else {
      return (
        <Container>
          <Row>
            <Col lg={3}></Col>
            <Col lg={6}>
              <Timer />
              <Board />
            </Col>
            <Col lg={3}></Col>
          </Row>

        </Container>
      )
    }
  }



  render() {
    
    return (
      <>
        { this.renderBoardOrDifficulty() }
      </>
    )
  }
}

const mapStateToProps = state => ({
  puzzle: state.puzzle
})

export default connect(mapStateToProps, {getPuzzle})(Play);