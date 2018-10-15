import React from 'react'

export default class Music extends React.Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false,
    };
  }

  pause () {
    this.setState({
      isPlaying: false,
    });
  }

  play () {
    this.setState({
      isPlaying: true,
    });
  }

  render() {
    const { isPlaying } = this.state;
    const clickFn = isPlaying ? this.pause : this.play;
    return (
      <div>
        <button onClick={clickFn.bind(this)}>{ isPlaying ? 'Pause' : 'Play' }</button>
      </div>
    );
  }
}
