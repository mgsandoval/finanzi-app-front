import React from 'react'

const Greeting = () => {
   const date = new Date();
   const hours = date.getHours();

   let greet = (hours < 12) ? "¡Buenos días!" : ((hours <= 18 && hours >= 12) ? "¡Buenas tardes!" : "¡Buenas noches!")

   return <span>{greet}</span>
}

export default Greeting;