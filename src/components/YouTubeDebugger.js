// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitRateClick = () => {
    this.setState({
      settings: {
        bitrate: 12,
        video: {
          resolution: '1080p'
        }
      }
    })
  }

  handleResolutionClick = () => {
    this.setState({
      settings: {
        bitrate: 8,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBitRateClick}>Bitrate Button</button><br/>
        <button onClick={this.handleResolutionClick}>Resolution Button</button>
      </div>
    )
  }
}
