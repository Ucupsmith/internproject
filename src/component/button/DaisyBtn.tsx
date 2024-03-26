import React from 'react'
import { Button } from 'react-daisyui'
const DaisyBtn = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
          <h1 className='font-bold text-4xl uppercase'>daisy button</h1>
          <div className="flex items-center mt-[25px] gap-2">
            {/* <Button className='rounded-md py-3 px-2 border bg-green-300'  color="info">
              Info
            </Button>
            <Button className='rounded-md py-3 px-2 border bg-green-500'  color="success">
              Success
            </Button>
            <Button className='rounded-md py-3 px-2 border bg-yellow-500' color="warning">
              Warning
            </Button>
            <Button className='rounded-md py-3 px-2 border bg-red-500' color="error">
              Error
            </Button> */}
          </div>
        </div>
    </>
  )
}

export default DaisyBtn