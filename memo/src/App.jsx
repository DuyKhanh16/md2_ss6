// import React, { useState } from 'react'
// import React, { useId } from 'react'
// import Header from './components/Header'

// const [name,setName] = useState("")
// const [products,setProducts] = useState([
//   {
//     name:"Mì tôm",
//     quantity:1,
//     price: 5000
//   },
//   {
//       name:"Sữa",
//       quantity:2,
//       price: 15000

//   },
//   {
//       name:"Bánh",
//       quantity:3,
//       price: 25000

//   },
// ])
// const [product,setProduct]=useState("")
// export default function UseID() {
//   const addProduct= ()=>{
//     let obj = {
//       name: name,
//       price: 5000,
//       quantity:2
//     }
//     setProducts([...products,obj]);
//     setProduct("");
//     setName("");
//   }
  
//   return (
//     <>
//     <Header></Header>
//     <input 

//     type="text" 
//     onChange={(e)=>changeValue(e.target.value)}
//     />
//     <button onClick={addProduct}>Thêm</button>
//     </>
//   )
// }
import React from 'react'
import { useId } from 'react'
import uuid from 'react-uuid'
import UseID from './components/UseID';
import UseCallback from './components/UseCallback';
export default function App() {
  console.log("userId",useId());
  return (
    <>
      <UseID></UseID>
      <UseCallback callback = {handleCallback}></UseCallback>
    </>
  )
}
