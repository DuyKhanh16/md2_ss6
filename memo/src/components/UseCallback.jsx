import React from 'react'

export default function UseCallback(callback) {

  const handleClick = ()=>{

  }
  return (
    <>
      UseCallback
      <button onClick={handleClick}></button>
    </>
  )
}
//Memo kiểm tra trong compnent có props nào thay đổi thì sẽ render không thì thôi