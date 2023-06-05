import { useEffect, useState } from 'react'

import './App.css'
import DateContent from './Component/Content/Content'
import DateTime from './Component/Date/DateTime'

function App() {
  //state
  const [time, setTime] = useState(new Date())

  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountdown = (birthDate) => {
    let now = new Date().getTime() // time since 1970 in m.sec.
    console.log(now);
    let timeCount = birthDate - now //convert milliseconds to seconds

    let days = Math.floor(timeCount / (60 * 60 * 24)) //convert seconds to days
    let hours = Math.floor(
      (timeCount % (60 * 60 * 24)) / (60 * 60) //convert seconds to hours
    )
    // let minutes
    // let seconds

    return [days, hours]
  }

  const birthDate = () => {
    let birth = 
  }

  useEffect(() => {
    const intervalTask = setInterval(() => {
      setTime(new Date())
    }, 1000) //1000 millisecond = 1 second
    return () => clearInterval(intervalTask)
  }, [])

  return (
    <div className='container'>
      <DateContent/>
      
    </div>
  )
}

export default App
