import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName: '',
         lastName: ''
      }
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
       this.setState({
          firstName: event.target.value,
          lastName: event.target.value
       })
    }
    // Alternate way of writing
    // handleChange(event){
    //     const {name, value} =event.target
    //     this.setState({
    //        [name]: value
    //     })
    //  }
    
  render() {
    return (
      <div>
         <form className='form'>
             <input type='text' placeholder='First Name' handleChanage={this.state.firstName}/><br/>
             <input type='text' placeholder='Lat Name' handleChange={this.state.lastName}/><br/>
             <h1>{this.state.firstName}{this.state.lastName}</h1>
         </form>
      </div>
    );
  }
}

export default Form