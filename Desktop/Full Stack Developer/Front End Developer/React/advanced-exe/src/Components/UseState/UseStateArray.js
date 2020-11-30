import React, { useState }from 'react'

import {data} from './data';

const UseStateArray = () => {
    const [people, usePeople] = useState(data);
    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }
    return (
        <div>
            {people.map((person) => {
                const {id, name, age} = person;
                return (
                    <div key={id} className='item'>
                        <h4>{name}</h4>
                        <h3>{age}</h3>
                        <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                )
            })}
            <button onClick={() => setPeople([])}>Clear Items</button>
        </div>
    )
}

export default UseStateArray;