import React from 'react'

const DaisyInput = () => {
  return (
    <>
       <div className="flex flex-col items-center mt-[25px] justify-center">
          <h1 className="uppercase font-bold text-4xl">daisy input</h1>
          <div className="flex mt-[25px] flex-wrap items-center justify-center">
            <input type="text" className='block py-3 px-2 border rounded-md bg-blue-gray-500' placeholder='input' />
          </div>
       </div>
    </>
  )
}

export default DaisyInput