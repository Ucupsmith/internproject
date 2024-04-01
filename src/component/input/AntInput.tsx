import { Input } from 'antd'
import React from 'react'

const AntInput = () => {
   
  return (
    <>
       <div className="flex flex-col items-center mt-[25px] justify-center">
          <h1 className="uppercase font-bold text-4xl">daisy input</h1>
          <div className="flex mt-[25px] flex-wrap border w-96 items-center justify-center">
            <Input placeholder='user input' />
          </div>
       </div>
    </>
  )
}

 {/* 
            Pros 
            *Komprehensif dan Konsisten
            *Desaign bisa lebih mudah dalam melakukan responsive
            *Aktif dalam pengembangan dan didukung
            *
            
            Cons
            *Lambat dalam mengimplementasikan desaign terhadap object
            *Ukuran file jadi lebih besar 
            *Keterbatasan dalam kustomisasi 
            *Perlu memahami konsep utility-first  

              */}

export default AntInput