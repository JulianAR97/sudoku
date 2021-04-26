import React from 'react';


const ScoreBoard = (props) => {
  let {difficulty, stats} = props
  const renderScores = () => {
    let scores = stats["topTenByDifficulty"] && difficulty ? stats["topTenByDifficulty"][difficulty] : []
    if (!scores[0]) {
      return <p>No scores to display...</p>
    } else {
      return scores.map(score => <p>{score}</p>)  
    }
  }

  const renderDifficulty = () => {
    if (difficulty) {
      return (
        <h5>({difficulty})</h5>
      )
    }
  }

  return (
    
    <div>
      <h3>Top Scores</h3>
      {renderDifficulty()}
      {renderScores()}
    </div>

  )
}


export default ScoreBoard