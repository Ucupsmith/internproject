import React from 'react'

const NativeInput = () => {
  return (
    <>
         <div className="flex flex-col mt-[25px] justify-center content-center">
            <h1 className="font-bold text-4xl text-center uppercase">native input</h1>
            <div className="w-full items-center mt-4 justify-center mb-[25px] flex">
              <label htmlFor="name" className='block px-3'>search here</label>
              <input id='name' type="text" className='block w-fit border py-3 px-2' />
            </div>
         </div>
    </>
  )
}

export default NativeInput