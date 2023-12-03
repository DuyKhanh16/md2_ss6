import React, { useContext } from 'react'
import { UserContext } from '../App'
export default function Component4({user}) {
    const info = useContext(UserContext)
    console.log(info);
  return (
    <>
    Xin chao {user}
   
    </>
  )
}
