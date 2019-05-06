import React, { Component } from 'react'

interface Props {
  date: string
}

interface State {
  days: number
  hours: number
  min: number
  sec: number
}

class Countdown extends Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  private interval: NodeJS.Timer = setInterval(() => {
    return
  }, 0)

  public componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date)
      date ? this.setState(date) : this.stop()
    }, 1000)
  }

  public componentWillUnmount() {
    this.stop()
  }

  private calculateCountdown(endDate: string) {
    let diff =
      (Date.parse(new Date(endDate).toUTCString()) -
        Date.parse(new Date().toUTCString())) /
      1000

    // clear countdown when date is reached
    if (diff <= 0) return false

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    }

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = diff

    return timeLeft
  }

  private stop() {
    clearInterval(this.interval)
  }

  public render() {
    const { days, hours, min, sec } = this.state

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
          <p className="t-heading-2 mv2">{min}</p>
          <p>minutos</p>
        </div>
        <div className="mh5 flex flex-column justify-center items-center">
          <p className="t-heading-2 mv2">{sec}</p>
          <p>segundos</p>
        </div>
      </div>
    )
  }
}

export default Countdown
