import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import eraser20Filled from '@iconify-icons/fluent/eraser-20-filled'
import noteLine from '@iconify-icons/clarity/note-line'
import { getPuzzle } from '../actions/puzzleActions'
import DifficultySelect from '../components/DifficultySelect'
import Board from './Board'
import Timer from '../components/Timer'
import { setMode, setCellNote } from '../actions/puzzleActions'


const difficulties = ['easy', 'medium', 'hard', 'very-hard', 'insane', 'inhuman']

class Play extends Component {
  
  getNoteIconColor = () => {
    return this.props.mode === 'notes' ? {backgroundColor: 'green'} : {backgroundColor: 'grey'}
  }
  
  handleIconClick = (e) => {
    if (e.target.id === 'noteIcon') {
      this.props.setMode();
    } else {
      console.log(e.target.id)
      this.props.setCellNote({cellID: this.props.inputSelected, noteArr: []})
    }
  }

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
              <Icon id="noteIcon" onClick={this.handleIconClick} icon={noteLine} color="#fad30d" backgroundColor="green" fontSize="40px" />
              <Icon id="eraserIcon" onClick={this.handleIconClick} icon={eraser20Filled} color="#ba7f9c" fontSize="40px"/>
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
  puzzle: state.puzzle,
  mode: state.mode,
  inputSelected: state.inputSelected
})

export default connect(mapStateToProps, {getPuzzle, setMode, setCellNote})(Play);

// Change from class component to using hooks