import React, { Component } from 'react';

class state extends Component {
constructor(){
    super()
    this.state = {
        answer: 'yes',
        name: 'John',
        age: 33,
        loggedIn: true,
    }
    
}

  render() {
    let isLoggedIn
        if(this.state.loggedIn == true){
          isLoggedIn = 'In'
        }else{
            isLoggedIn = 'Out'
        }
    
    return (
      <div>
        <h1>Are you my here? {this.state.answer}</h1>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age} years old</h1>
        <h1>You are cureently logged {isLoggedIn}</h1>
      </div>
    );
  }
}

export default state
