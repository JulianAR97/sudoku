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
import { getPuzzle, setMode, setCellNote, getStats, resetPuzzle, sendScore } from '../actions/puzzleActions'
import { puzzleObjToArr, checkPuzzle, getCandidates, getTime, boardStateShouldUpdate, difficulties } from '../helpers/gameHelpers'
import { redHighlighting, greenHighlighting, empty, removeClassFromAll } from '../helpers/generalPurpose'
import StatsBoard from '../components/StatsBoard';


// returns true or false
// Move to helper file


const Play = (props) => {
  
  const [boardState, setBoardState] = useState(props.puzzleObj)
  const noteIconColor = props.mode === 'notes' ? '#5bb786' : 'inherit'
  const puzzleArr = puzzleObjToArr(boardState)
  
  useEffect(() => {

    if (props.userID && empty(props.stats)) {
      props.getStats(props.userID)
    }
    
    if (!!props.currSelected) {
      greenHighlighting(props.currSelected)
    } else {
      removeClassFromAll('td', 'green')
    }

    if (props.solution && checkPuzzle({puzzleObj: boardState, solution: props.solution})) {
      let time = getTime()
      props.sendScore({userID: props.userID, time, difficulty: props.difficulty})
    }

  }, [boardState, props])

  if (boardStateShouldUpdate(boardState, props.puzzleObj)) {
    setBoardState(props.puzzleObj)
  }

  const handleKeyDown = (event) => {
    const key = props.inputSelected
    const target = document.getElementById(key)
    const keyVal = event.key
    
    // Create an array [1..9] and return if keyval is not in there
    if (!Array.from(Array(10).keys()).slice(1).includes(Number(keyVal)) && keyVal !== 'Backspace') {
      return 
    }

    const value = keyVal === 'Backspace' ? '.' : keyVal
    const candidates = getCandidates(boardState, key)
    
    if (props.mode === 'input') {
      redHighlighting({target, candidates, value})
      setBoardState({ ...boardState, [key]: value })
    } else {
      let notes = [...props.cellNotes[key], keyVal]
      // ES6 to get unique array
      const uniq = [...new Set(notes)];
      props.setCellNote({cellID: key, noteArr: uniq})
    }
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

      return (
        <>
          <Timer />
          <Board handleKeyDown={handleKeyDown} puzzleArr={puzzleArr}/>
          
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
          <ScoreBoard stats={props.stats} difficulty={props.difficulty}/>
        </Col>
          
        <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}} align="center" justifyContent="center">
          {renderBoardOrDifficulty()}
        </Col>
          
        <Col xs={{span: 12, order: 3}} lg={{span: 3, order: 3}}>
          <StatsBoard stats={props.stats} />
        </Col>
        
      </Row>
    </Container>
  )
  
}

const mapStateToProps = state => ({
  puzzleObj: state.puzzleObj,
  solution: state.solution,
  difficulty: state.difficulty,
  mode: state.mode,
  stats: state.stats,
  inputSelected: state.inputSelected,
  currSelected: state.currSelected,
  userID: state.userID,
  cellNotes: state.cellNotes,
})

export default connect(mapStateToProps, {getPuzzle, setMode, setCellNote, getStats, resetPuzzle, sendScore})(Play);

// Change from class component to using hooks
