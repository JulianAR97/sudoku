import React, {useState, useEffect} from 'react'
import {stopWatch} from '../helpers/generalPurpose'

const Timer = (props) => {
  
  const [time, setTime] = useState(0)
  
  // useEffect initializes interval in "componentDidMount" equivalent
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    // return clearInteval whih acts like "componentWillUnmount"
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="timer">
      {stopWatch(time)}
    </div>
  )
}

export default Timer