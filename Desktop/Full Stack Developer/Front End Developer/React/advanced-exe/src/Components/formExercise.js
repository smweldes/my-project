import React, { Component } from 'react';

class formExercise extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName: '',
         lastName: '',
         age: '',
         gender: '',
         description: ''
      }
    }
    handleChange(event){
         const{name, value} = event.target
         this.setState({
            [name]: value
         })
    }
    
  render() {
    return (
      <div>
        <form>
            <input 
            type='text' 
            value= {this.state.firstName}
            placeholder='First Name' 
            onChange={this.handleChange}/>

            <input type='text' 
            placeholder='Last Name' 
            value= {this.state.lastName}
            onChange={this.handleChange}/>

            <input type='text' 
            placeholder='Age' 
            value={this.state.age}
            onChange={this.handleChange}/>

            <br/>
            <button type='submit' placeholder='Submit' onCLick={this.handleChange}></button>
        </form>
        <br/>
        <h1>Entered information</h1><br/>

        <h2>Your name: {this.state.firstName} {this.state.lastName}</h2>
        <h2>Your age: {this.state.age}</h2>

      </div>
    );
  }
}

export default formExercise
