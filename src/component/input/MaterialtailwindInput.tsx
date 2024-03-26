import React from 'react'
import { Input } from '@material-tailwind/react'
const MaterialtailwindInput = () => {
  return (
    <>
      <div className="w-full mt-4  flex flex-col gap-6 justify-center items-center content-center mb-[25px]">
        <h1 className="font-bold text-center text-4xl uppercase">materialtailwind input</h1>
        <div className="w-72 flex flex-row mx-auto gap-6">
          <label htmlFor="id" className='block py-[7px]'>search</label>
          <Input id='id' variant="outlined" label="Outlined" placeholder="Outlined" crossOrigin={{}}/>  
        </div>   
      </div>
    </>
  )
}

export default MaterialtailwindInput