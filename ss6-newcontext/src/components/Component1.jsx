import React from 'react'
import Component2 from './Component2'

export default function Component1({user}) {
  const make ="1"
  const mak ="2"
  const ma ={make,mak}
console.log(ma);
  return (
    <>  
        <Component2 user = {user}></Component2>
    </>
  )
}
