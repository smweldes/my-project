import React from 'react'
import JokesData from './JokesData'
import Joke from './Joke'

function MapComponent(){
  const jokeComponent = JokesData.map(Joke => <Joke key={joke.id} Question={joke.question}
   PunchLine={joke.punchLine}  />)

    return (
        <div>
            {jokes}
        </div>
    )
}

export default MapComponent