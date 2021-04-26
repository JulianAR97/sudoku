import React from 'react';
import {empty, titleize} from '../helpers/generalPurpose'

const StatsBoard = (props) => {
  let {stats} = props
  
  
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

        </>
   
      )
    } else {
      return <p>'No stats to display...'</p>
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