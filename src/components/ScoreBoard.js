import React from 'react';


const ScoreBoard = (props) => {
  
  const renderScores = (scores) => {
    if (scores[0] === null) {
      return <p>No scores to display...</p>
    } else {
      return scores.map(score => <p>{score}</p>)  
    }
  }

  return (
    
    <div>
      <h3>Scores</h3>
      {renderScores(props.scores)}
    </div>

  )
}


export default ScoreBoard