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
    return this.props.mode === 'notes' ? '#5bb786' : 'inherit'
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
            
            <Col lg={6} align="center">
              <Timer />
              <Board />
              
              <Icon 
                id="noteIcon" 
                icon={noteLine} 
                color="#fad30d" 
                style={{backgroundColor: this.getNoteIconColor(), cursor: 'hand', marginRight: '10px'}}
                fontSize="40px" 
                onClick={this.handleIconClick} 
              />

              <Icon 
                id="eraserIcon" 
                icon={eraser20Filled} 
                color="#ba7f9c"
                style={{cursor: 'hand', marginLeft: '10px'}}
                fontSize="40px"
                onClick={this.handleIconClick} 
              />

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