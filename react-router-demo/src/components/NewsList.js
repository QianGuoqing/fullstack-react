import React, { Component } from 'react'

class NewsList extends Component {
  render () {
    return (
      <div>
        newslist-item {this.props.match.params.id}
      </div>
    )
  }
}

export default NewsList