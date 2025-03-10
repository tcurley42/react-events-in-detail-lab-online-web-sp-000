// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

  handleOnClick = (event) => {
    event.persist()
    setTimeout(function() {this.props.onDelayedClick(event)}.bind(this), this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleOnClick} />
    )
  }
}
