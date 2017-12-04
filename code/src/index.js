import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  stopTick = () => {
    clearInterval(this.timerID)
  }

  startTick = () => {
    this.setState({
      date: new Date()
    })
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.stopTick}>
          Pausa klockan
        </button>
        <button onClick={this.startTick}>
          Starta klockan
        </button>
      </div>
    )
  }

}

ReactDOM.render(<Clock />, document.getElementById("root"))
