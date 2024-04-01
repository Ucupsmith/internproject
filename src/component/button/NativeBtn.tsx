import React from "react"
export const NativeBtn = () => {
  return (
    <>  
        <div className="flex flex-col mt-[25px] items-center justify-center content-center">
            <h1 className="font-bold text-4xl mt-[25px] uppercase text-center">native button</h1>
            <div className="w-full items-center justify-center pt-2 flex">
              <button type='submit' className='flex justify-center border rounded-full w-fit py-3 px-3 hover:bg-blue-500'>click here</button>
            </div>
        </div>
        
    </>
  )
}

{/* 
            Pros 
            *Native button bisa untuk menggunakan utilize yang lebih bebas
            *Mudah diimplementasi kedalam desaign komponen
            *Tingkat konsistensi yang tinggi dengan tailwindcss
            *Ringan
            
            Cons
            *Lambat dalam mengimplementasikan desaign terhadap object
            *Ukuran file jadi lebih besar 
            *Keterbatasan dalam kustomisasi 
            *Perlu memahami konsep utility-first  

              */}

export default NativeBtn