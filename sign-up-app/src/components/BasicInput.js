import React, { Component } from 'react'

export default class BasicInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      names: [],
      name: ''
    };
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    const name = this.state.name
    const names = [...this.state.names, name]
    this.setState({
      names: names
    });
    this.state.name = ''
  }

  render() {
    return (
      <div>
        <h1>注册表</h1>
        <form onSubmit={this.onFormSubmit}>
          <input 
            type="text"
            placeholder="用户名"
            value={this.state.name}
            onChange={this.onNameChange}/>
          
          <input type="submit" value="提交"/>
        </form>
        <div>
          <h3>名字</h3>
          <ul>
            {
              this.state.names.map((name, index) => {
                return <li key={index.toString()}>{name}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
