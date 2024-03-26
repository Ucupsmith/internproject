import React from 'react'

const DaisyBtn = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
          <h1 className='font-bold text-4xl uppercase'>daisy button</h1>
          <div className="flex items-center mt-[25px] gap-2">
            <button className="btn btn-primary btn-outline border py-3 px-2 rounded-full hover:bg-orange-500">daisy button</button>
          </div>
      </div>
    </>
  )
}

export default DaisyBtn