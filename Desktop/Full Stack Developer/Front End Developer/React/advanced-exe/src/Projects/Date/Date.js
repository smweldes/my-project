import React from 'react'

function Date(){
   const date = new Date()
   const hour = date.getHour()
   let timeOfDay

   if(hour < 12){
       timeOfDay = 'Morning'
   }else if(hour >=12 && hour <17){
       timeOfDay = 'Afternoon'
   }else {
       timeOfDay = 'Evening'
   }

    return (
        <div>
         <p>Good {timeOfDay}!</p>
        </div>
    )
}

export default Date