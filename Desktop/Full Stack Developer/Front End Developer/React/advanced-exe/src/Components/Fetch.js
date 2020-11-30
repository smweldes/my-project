import React, { Component } from 'react';

class Fetch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         character: {}
      }
    }
    componentDidMount(){
        fetch("http://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                character: data
            })
        })
    }
    
  render() {
    return (
      <div>
        {this.state.character.name}
      </div>
    );
  }
}

export default Fetch