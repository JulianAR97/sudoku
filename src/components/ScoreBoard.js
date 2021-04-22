import React from 'react';
import { connect } from 'react-redux'
const ScoreBoard = (props) => {
  
  const renderScores = (scores) => {
    return scores.map(score => <p>{score}</p>)  
  }

  return (
    
    <div>
      <h3>Scores</h3>
      {renderScores(props.scores)}
    </div>

  )
}

const mapStateToProps = state => {
  return {
    scores: state.scores
  }
}

export default connect(mapStateToProps)(ScoreBoard)