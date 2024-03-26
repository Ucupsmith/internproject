import React from 'react'
import { Button } from "@material-tailwind/react";

const MaterialtailwindBtn = () => {
  return (
    <>
      <div className="w-full flex flex-col mb-[25px] justify-center items-center content-center gap-4">
        <h1 className='font-bold text-4xl uppercase'>materialtailwind button</h1>
        <Button className='w-72 hover:bg-blue-gray-400 gap-4 text-black' color='blue'>click here </Button>
        <Button className='mt'>click here</Button>
      </div>

      
    </>
  )
}

export default MaterialtailwindBtn