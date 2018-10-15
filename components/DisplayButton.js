import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id, fn } = this.props
    const button = document.getElementById(id);
    button.addEventListener('click', fn);
  }

  componentWillUnmount() {
    const { id, fn } = this.props
    const button = document.getElementById(id);
    button.removeEventListener('click', fn);
  }

  render() {
    const { id, children } = this.props
    return (<button id={id}>{children}</button>);
  }
}
