import React from 'react'

function Conditional(props){
    if(props.isloading === true){
        return (
            <h1>....Loading</h1>
        )
    }else {
        return (
            <h1>This app is really cool</h1>
        )
    }
    
}

export default Conditional