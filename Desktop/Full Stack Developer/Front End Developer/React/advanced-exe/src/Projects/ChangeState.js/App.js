import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(){
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    render() {
        return (
            <div>
             <h1>{this.state.count}</h1>
             <button onChange= {this.handleChange}> change</button>
            </div>
        )
    }
    
}

export default App