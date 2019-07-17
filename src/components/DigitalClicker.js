// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  let temp = 0
  constructor() {
    super()
    this.state = {
      timesClicked: temp
    }
  }

  handleClick = () => {
    temp += 1
    this.setState({
      timesClicked: temp
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
