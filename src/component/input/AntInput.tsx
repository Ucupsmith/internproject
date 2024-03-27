import { Input } from 'antd'
import React from 'react'

const AntInput = () => {
  return (
    <>
       <div className="flex flex-col items-center mt-[25px] justify-center">
          <h1 className="uppercase font-bold text-4xl">daisy input</h1>
          <div className="flex mt-[25px] flex-wrap border w-96 items-center justify-center">
            <Input placeholder='user input'/>
            
          </div>
       </div>
    </>
  )
}

export default AntInput