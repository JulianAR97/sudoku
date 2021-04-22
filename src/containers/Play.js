import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import eraser20Filled from '@iconify-icons/fluent/eraser-20-filled'
import noteLine from '@iconify-icons/clarity/note-line'
import Board from './Board'
import DifficultySelect from '../components/DifficultySelect'
import ScoreBoard from '../components/ScoreBoard'
import Timer from '../components/Timer'
import { getPuzzle } from '../actions/puzzleActions'
import { setMode, setCellNote, getScores } from '../actions/puzzleActions'



const Play = (props) => {
  
  useEffect(() => {
    if (props.userUUID) {
      props.getScores(props.userUUID)
    }
  })

  const difficulties = ['easy', 'medium', 'hard', 'expert'] 
  const noteIconColor = props.mode === 'notes' ? '#5bb786' : 'inherit'
  
  const handleDifficultySelect = (e) => props.getPuzzle(e.target.value)
  
  const handleIconClick = (e) => {
    
    if (e.target.id === 'noteIcon') {
      props.setMode();
    } else {
      props.setCellNote({cellID: props.inputSelected, noteArr: []})
    }

  }


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
    <Container className="fh"> 
      <Row className="fh">
        
        <Col lg={3} align="center">
          <ScoreBoard />
        </Col>
          
        <Col lg={6} align="center" justifyContent="center">
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
  inputSelected: state.inputSelected,
  userUUID: state.userUUID
})

export default connect(mapStateToProps, {getPuzzle, setMode, setCellNote, getScores})(Play);

// Change from class component to using hooks
