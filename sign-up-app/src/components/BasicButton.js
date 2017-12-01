import React, { Component } from 'react'

export default class BasicButton extends Component {

  onGreatClick = (e) => {
    console.log('click button-1 great', e)
  }

  onAmazingClick = (e) => {
    console.log('click button-2 amazing', e)
  }

  onButtonClick = (e) => {
    const button = e.target
    console.log(`The user clicked ${button.name}: ${button.value}`)
  }

  render() {
    return (
      <div>
        <h1>你觉得React怎么样？</h1>
        <button
          name="button-1"
          value="great"
          onClick={this.onButtonClick}>great</button>
        <button
          name="button-2"
          value="amazing"
          onClick={this.onButtonClick}>amazing</button>
      </div>
    )
  }
}
