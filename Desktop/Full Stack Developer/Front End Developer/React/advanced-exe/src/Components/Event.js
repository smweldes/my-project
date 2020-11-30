import React, { Component } from 'react';

class Event extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(preState => {
            return {
                count: prevState.count + 1
            }
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1><br/>
        <h1 onClick={this.handleClick}>Reset</h1>
        <h1 onClick={this.state.count}>Increase</h1>
        <h1 onClick={this.state.count}>Decrease</h1>
      </div>
    );
  }
}

export default Event
