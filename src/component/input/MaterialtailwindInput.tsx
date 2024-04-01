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

 {/* Pros
          *Materialtailwind lebih mudah diapplikasikan karena relevan dengan style yang digunakan
          *Dokumentasi yang jelas, props yang mudah dipahami 
          *Banyak framework yang bisa mengimplementasikan style dari tailwindcss
          *Side component dari accordation sampai table bisa langsung diimplementasikan \
          
          Cons
          *Tidak cocok dalam semua proyek
          *Terlalu bergantung dengan tailwindcss
          *Kurang akan fitur yang kompleks

          */}

  

export default MaterialtailwindInput