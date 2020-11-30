import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
      this.increase= () => this.setState({count: this.state.count+1})
      this.increase= () => this.setState({count: this.state.count-1})
    }
    
    
  render() {
    return (
      <div>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }
}

export default Counter
