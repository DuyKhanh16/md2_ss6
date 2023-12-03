import React, { createContext, useState } from 'react'
import Component1 from './components/Component1'
export const UserContext = createContext();
export default function App() {
  const [name,setName] = useState("Hao"); 
  const [name1,setName1] = useState("XuanMike"); 
  const [a,setA] = useState({
    name: "hoa"
  }); 

  return (
    <>
    <UserContext.Provider value={a.name}>
      App
      <Component1 user={name}></Component1>
    </UserContext.Provider>
    </>
  )
}
