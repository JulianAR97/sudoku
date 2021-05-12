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
import { getPuzzle, setMode, setCellNote, getStats, resetPuzzle, sendScore, setInputSelected } from '../actions/puzzleActions'
import { puzzleObjToArr, checkPuzzle, getCandidates, getTime, boardStateShouldUpdate, difficulties, getNextKey } from '../helpers/gameHelpers'
import { redHighlighting, greenHighlighting, empty, removeClassFromAll, removeDupe } from '../helpers/generalPurpose'
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
    
    // If there is a currently selected cell, add green highlighting
    if (!!props.currSelected) {
      greenHighlighting(props.currSelected)
    } else {
    // Otherwise, the cell is deselected, and we need to remove the green highlighting
      removeClassFromAll('div', 'green')
    }

    // If the game is completed, we need to check for accuracy
    if (props.solution && checkPuzzle({puzzleObj: boardState, solution: props.solution})) {
      // Then get the time from our timer
      let time = getTime()
      // Then send the score to the backend
      props.sendScore({userID: props.userID, time, difficulty: props.difficulty})
    }

  }, [boardState, props]) // This is a dependency array which you need for useEffect


  // This is now innapropriately named, but is used to check whether the board state is empty but the puzzleObj
  // From redux is not
  if (boardStateShouldUpdate(boardState, props.puzzleObj)) {
    setBoardState(props.puzzleObj)
  }

  // if (currSelected !== props.currSelected) {
  //   setCurrSelected(props.currSelected)
  // }

  const handleKeyDown = (event) => {
    const key = props.inputSelected
    const target = document.getElementById(key)
    // keyVal is the actual keypress
    const keyVal = event.key
    
    const goodKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Tab']
    
    if (!goodKeys.includes(keyVal)) {
      return 
    }

    if (keyVal === 'Tab') {
      const nextKey = getNextKey(key)
      props.setInputSelected(nextKey);
      return;
    }

    // map 'Backspace key to '.' which is default 'null' value 
    // otherwise keyVal will be between 1 and 9
    const value = keyVal === 'Backspace' ? '.' : keyVal
    const candidates = getCandidates(boardState, key)
    
    if (props.mode === 'input') {
      props.setCellNote({cellID: key, noteArr: []})
      redHighlighting({target, candidates, value})
      setBoardState({ ...boardState, [key]: value })
    } else {
      let notes = keyVal === 'Backspace' ? [] : [...props.cellNotes[key], keyVal]
      // ES6 to get unique array
      // const uniq = [...new Set(notes)];

      const diff = removeDupe(notes)
      props.setCellNote({cellID: key, noteArr: diff})
    }
  }

  
  const handleDifficultySelect = (e) => props.getPuzzle(e.target.value)
  
  
  const handleIconClick = (e) => {
    const inpSel = props.inputSelected
    if (e.target.id === 'noteIcon') {
      props.setMode();
    } else {
      props.mode === 'notes' ? props.setCellNote({cellID: inpSel, noteArr: []}) : setBoardState({...boardState, [inpSel]: '.'})
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
          
        <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}} align="center">
          {renderBoardOrDifficulty()}
        </Col>
          
        <Col xs={{span: 12, order: 3}} lg={{span: 3, order: 3}} align="center">
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

export default connect(mapStateToProps, {getPuzzle, setMode, setCellNote, getStats, resetPuzzle, sendScore, setInputSelected})(Play);

// Change from class component to using hooks
