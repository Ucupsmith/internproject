import React from "react"
export const NativeBtn = () => {
  return (
    <>  
        {/* Native btn bisa untuk menggunakan utilize yang lebih bebas  */}
        <div className="flex flex-col mt-[25px] items-center justify-center content-center">
            <h1 className="font-bold text-4xl mt-[25px] uppercase text-center">native button</h1>
            <div className="w-full items-center justify-center pt-2 flex">
              <button type='submit' className='flex justify-center border rounded-full w-fit py-3 px-3 hover:bg-blue-500'>click here</button>
            </div>
        </div>
        
    </>
  )
}

export default NativeBtn