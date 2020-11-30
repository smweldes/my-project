import React ,{useState} from 'react'

const UseStateBasics = () => {
    const  [text, setText] = useState('random Title');

    const handleClick = () => {
        setText('Welcome to Cali')
    }
    return (
        <div>
           <h1>{text}</h1>
            <button onClick={handleClick}>Change Title</button>
        </div>
    )
    
};

export default UseStateBasics;