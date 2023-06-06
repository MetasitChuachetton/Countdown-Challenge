import { useEffect, useState } from 'react'

import './App.css'
import DateContent from './Component/Content/Content'
import DateTime from './Component/Date/DateTime'

function App() {
  //state
  const [time, setTime] = useState(new Date())
  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountdown = (birthDate) => {
    let now = new Date(time).getTime() // time since 1970 in m.sec.
    // console.log(birthDate);
    // console.log(now);
    let timeCount = birthDate - now //convert milliseconds to seconds
    // console.log(timeCount);
    let days = Math.floor(timeCount / (1000 * 60 * 60 * 24)) //convert seconds to days
    let hours = Math.floor(
      (timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) //convert seconds to hours
    )
    let minutes = Math.floor((timeCount % (1000 * 60 * 60 )/(1000*60))) // let minutes
    let seconds = Math.floor((timeCount % (1000 * 60)/(1000)))// let seconds
    // console.log(days + " " + hours + " " + minutes + " " + seconds);
    return [days, hours , minutes , seconds]
  }
  const count = getCountdown(new Date('Mar 14,2024 15:15:15').getTime())
  // const [days,hours,minutes,seconds] = count;
  // console.log(days,hours,minutes,seconds);
  // console.log(count);
 
  useEffect(() => {
    const intervalTask = setInterval(() => {
      setTime(new Date())
    }, 1000) //1000 millisecond = 1 second
    return () => clearInterval(intervalTask)
  }, [])

  return (
    <div className='container'>
      <DateContent/>
      <DateTime count = {count}/>
    </div>
  )
}

export default App
