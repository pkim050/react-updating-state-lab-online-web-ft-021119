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
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionClick = () => {
    this.setState({
      video: {
        ...this.state.video,
        resolution: '720p'
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitRateClick}>Bitrate Button</button><br/>
        <button className="resolution" onClick={this.handleResolutionClick}>Resolution Button</button>
      </div>
    )
  }
}
