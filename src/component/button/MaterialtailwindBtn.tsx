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

export default MaterialtailwindBtn