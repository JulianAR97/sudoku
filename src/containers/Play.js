import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import eraser20Filled from '@iconify-icons/fluent/eraser-20-filled'
import noteLine from '@iconify-icons/clarity/note-line'
import Board from './Board'
import DifficultySelect from '../components/DifficultySelect'
import ScoreBoard from '../components/ScoreBoard'
import Timer from '../components/Timer'
import { getPuzzle, setMode, setCellNote, getScores, resetPuzzle } from '../actions/puzzleActions'
import { puzzleObjToArr, checkPuzzle, getCandidates, getTime, boardStateShouldUpdate, difficulties } from '../helpers/gameHelpers'
import { redHighlighting, greenHighlighting, empty, removeClassFromAll } from '../helpers/generalPurpose'
import { postScore } from '../helpers/user'

// returns true or false
// Move to helper file


const Play = (props) => {
  
  const [boardState, setBoardState] = useState(props.puzzleObj)
  const noteIconColor = props.mode === 'notes' ? '#5bb786' : 'inherit'
  const puzzleArr = puzzleObjToArr(boardState)

  useEffect(() => {
    if (boardStateShouldUpdate(boardState, props.puzzleObj)) {
      setBoardState(props.puzzleObj)
    }
    
    if (props.userUUID && !props.scores.length) {
      props.getScores(props.userUUID)
    }

    if (!!props.currSelected) {
      greenHighlighting(props.currSelected)
    } else {
      removeClassFromAll('input', 'green')
    }

  }, [boardState, props])

  
  const handleChange = (event) => {
    const target = event.target
    const key = target.id
    const value = target.value || '.'
    const candidates = getCandidates(boardState, key)
    
    redHighlighting({target, candidates})
    setBoardState({ ...boardState, [key]: value })
  }

  
  const handleDifficultySelect = (e) => props.getPuzzle(e.target.value)
  
  const handleIconClick = (e) => {
    
    if (e.target.id === 'noteIcon') {
      props.setMode();
    } else {
      props.setCellNote({cellID: props.inputSelected, noteArr: []})
    }

  }


  const renderBoardOrDifficulty = () => {
    
    if (empty(props.puzzleObj)) {
      return (
        <DifficultySelect difficulties={difficulties} handleClick={handleDifficultySelect} />
      )   
    } else {

      if (checkPuzzle({puzzleObj: boardState, solution: props.solution})) {
        postScore(getTime(), props.userUUID)
        props.resetPuzzle()
      } 

      return (
        <>
          <Timer />
          <Board handleChange={handleChange} puzzleArr={puzzleArr}/>
          
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

  // When defining breakpoints, it starts at smallest, and then continues until next defined
  // So xs will apply for sm and md as well
  return (
    <Container className="fh"> 
      <Row className="fh">
        
        <Col xs={{span: 12, order: 2}} lg={{span: 3, order: 1}} align="center">
          <ScoreBoard scores={props.scores}/>
        </Col>
          
        <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}} align="center" justifyContent="center">
          {renderBoardOrDifficulty()}
        </Col>
          
        <Col xs={{span: 12, order: 3}} lg={{span: 3, order: 3}}></Col>
        
      </Row>
    </Container>
  )
  
}

const mapStateToProps = state => ({
  puzzleObj: state.puzzleObj,
  solution: state.solution,
  mode: state.mode,
  scores: state.scores,
  inputSelected: state.inputSelected,
  currSelected: state.currSelected,
  userUUID: state.userUUID
})

export default connect(mapStateToProps, {getPuzzle, setMode, setCellNote, getScores, resetPuzzle})(Play);

// Change from class component to using hooks
