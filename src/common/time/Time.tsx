import React, { useState, useEffect } from 'react'
// img
import clock from '../../asset/images/icons/clock.png'
// style
import { TimeSC } from './Time.styles'

const Time: React.FC = () => {
  const [time, setTime] = useState<string>(
    `${String(new Date().getHours()).padStart(2, '0')}시 ${String(
      new Date().getMinutes(),
    ).padStart(2, '0')}분`,
  )

  const currentTime = () => {
    const today = new Date()
    const hours = String(today.getHours()).padStart(2, '0')
    const minute = String(today.getMinutes()).padStart(2, '0')

    setTime(`${hours}시 ${minute}분`)
  }

  useEffect(() => {
    const timer = setInterval(currentTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <TimeSC.TimeWrap>
      <TimeSC.ClockImg src={clock} alt='clock' />
      <TimeSC.Time>{time}</TimeSC.Time>
    </TimeSC.TimeWrap>
  )
}

export default Time
