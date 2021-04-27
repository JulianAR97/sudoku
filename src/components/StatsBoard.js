import React from 'react';
import {empty, titleize} from '../helpers/generalPurpose'

const StatsBoard = (props) => {
  const {stats} = props
  const topTens = stats.topTenByDifficulty
  const topTimes = {}
  
  for (const k in topTens) {
    topTimes[k] = topTens[k][0] || 'No Times'
  }
  
  
  const renderCategory = (category) => {
    return Object.keys(category).map((k, i) => {
      const val = category[k] || category[k] === 0 ? category[k] : 'No Times'
      return(
        <p key={i}>{titleize(k)}: {val}</p>
      )
    })
  }
  
  const renderStats = () => {
    if (!empty(stats)) {
      
  
      return (
        <>
          <h5>Average Times:</h5>
          {renderCategory(stats.averagesByDifficulty)}
          <br />
          <h5>Completed Games: </h5>
          {renderCategory(stats.totalsByDifficulty)}
          <br />
          <h5>Top Times: </h5>
          {renderCategory(topTimes)}
        </>
   
      )
    } else {
      return <p>No stats to display...</p>
    }
  }

  return (
    
    <div className="smlh">
      <h3>Stats</h3>
      {renderStats()}
    </div>

  )
}


export default StatsBoard