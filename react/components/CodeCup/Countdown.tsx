import React, { FunctionComponent, useState, useEffect, useRef } from 'react'

const Countdown: FunctionComponent<{ deadline: Date }> = ({ deadline }) => {
  const [now, setNow] = useState(Date.now())
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)

  const modifiedDate = Math.trunc(deadline.valueOf() / 1000)

  function getSeconds() {
    return Math.trunc((modifiedDate - now) % 60)
  }
  function getMinutes() {
    return Math.trunc(((modifiedDate - now) / 60) % 60)
  }
  function getHours() {
    return Math.trunc(((modifiedDate - now) / 60 / 60) % 24)
  }
  function getDays() {
    return Math.trunc((modifiedDate - now) / 60 / 60 / 24)
  }

  // setInterval(() => {
  //   setNow(new Date().getTime() / 1000)
  //   setDays(getDays())
  //   setHours(getHours())
  //   setMinutes(getMinutes())
  //   setSeconds(getSeconds())
  // }, 1000)

  return (
    <div className="pa7-l pa5 br3 bg-emphasis flex justify-around">
      <div className="mh5 flex flex-column justify-center items-center">
        <p className="t-heading-2 mv2">{days}</p>
        <p>dias</p>
      </div>
      <div className="mh5 flex flex-column justify-center items-center">
        <p className="t-heading-2 mv2">{hours}</p>
        <p>horas</p>
      </div>
      <div className="mh5 flex flex-column justify-center items-center">
        <p className="t-heading-2 mv2">{minutes}</p>
        <p>minutos</p>
      </div>
      <div className="mh5 flex flex-column justify-center items-center">
        <p className="t-heading-2 mv2">{seconds}</p>
        <p>segundos</p>
      </div>
    </div>
  )
}

export default Countdown
