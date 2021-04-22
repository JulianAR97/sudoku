import React from 'react';
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



const Play = (props) => {
  
  const difficulties = ['easy', 'medium', 'hard', 'very-hard', 'insane', 'inhuman'] 
  const noteIconColor = props.mode === 'notes' ? '#5bb786' : 'inherit'
  
  const handleIconClick = (e) => {
    
    if (e.target.id === 'noteIcon') {
      props.setMode();
    } else {
      props.setCellNote({cellID: props.inputSelected, noteArr: []})
    }

  }

  const handleDifficultySelect = (e) => props.getPuzzle(e.target.value)

  const renderBoardOrDifficulty = () => {
    
    if (props.puzzle === '') {
      return (
        <DifficultySelect difficulties={difficulties} handleClick={handleDifficultySelect} />
      )   
    } else {
    
      return (
        <>
          <Timer />
          <Board />
          
          <Icon 
            id="noteIcon" 
            icon={noteLine} 
            color="#fad30d" 
            style={{backgroundColor: noteIconColor, cursor: 'hand', marginRight: '10px'}}
            fontSize="40px" 
            onClick={handleIconClick} 
          />

          <Icon 
            id="eraserIcon" 
            icon={eraser20Filled} 
            color="#ba7f9c"
            style={{cursor: 'hand', marginLeft: '10px'}}
            fontSize="40px"
            onClick={handleIconClick} 
          />
        </>
      )
    }
  }

  return (
    <Container>
      <Row>
        <Col lg={3}></Col>
          
        <Col lg={6} align="center">
          {renderBoardOrDifficulty()}
        </Col>
          
        <Col lg={3}></Col>
        
      </Row>

    </Container>
  )
  
}

const mapStateToProps = state => ({
  puzzle: state.puzzle,
  mode: state.mode,
  inputSelected: state.inputSelected
})

export default connect(mapStateToProps, {getPuzzle, setMode, setCellNote})(Play);

// Change from class component to using hooks
