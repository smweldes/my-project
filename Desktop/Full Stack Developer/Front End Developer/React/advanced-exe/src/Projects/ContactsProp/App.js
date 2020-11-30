import React from 'react'

function App(props){
    return (
        <div>
         
             <h2>Name: {props.name}</h2>
             <img src={props.imgUrl}/>
             <p>Email: {props.email}</p>
             <p> Phone {props.phone}</p>

         
        </div>
    )
}

export default App