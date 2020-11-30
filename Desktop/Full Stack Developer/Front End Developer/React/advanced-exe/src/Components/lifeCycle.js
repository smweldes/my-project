import React, { Component } from 'react';
import Conditional from './Conditional'

class lifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      
      componentDidMount = () => {
          setTimeout(() => {
              this.setState({
                  isLoading: false
              })
          }, 1500)
      }
      
    }
    
  render() {
    return (
      <div>
        <Conditional isLoading={this.state.isLoading}/>
      </div>
    );
  }
}

export default lifeCycle
