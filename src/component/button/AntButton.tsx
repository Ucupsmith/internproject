import React from 'react'
import { useState } from 'react'
import { GetStaticPaths } from 'next'
import { Button} from 'antd';``

const AntButton = () => {
  
  const [color, setColor] = useState("")

  const clicker = ()=>{
    setColor(color ? "bg-blue-500": "bg-slate-500")
  }
  
  return (
    <>
      <div className="flex flex-col justify-center items-center">
          <h1 className='font-bold text-4xl uppercase'>ant button</h1>
          <div className="flex flex-wrap items-center mt-[25px] gap-2">
            <Button>cek</Button>
            <Button disabled={true}>ant design button</Button>
            <Button loading={true}>button loading</Button>
          </div>
        
      </div>
      
    </>
  )
}

export default AntButton