import React from 'react'

const LoginPage = () => {
  return (
    <>
        <div className="w-full fit bg-gradient-to-b from-blue-500 to-purple-500 justify-center flex mt-[25px] items-center content-center">
            <div className="w-96 h-[250px] pt-[25px] mt-[25px] border rounded-md bg-white flex flex-col">
                <h1 className="font-bold text-center text-4xl capitalize ">login</h1>
                <div className="w-96 mt-[25px] flex flex-col items-center justify-center">
                    <label htmlFor="email" className='mt-[25px] flex px-[25px] justify-start py-3 w-full mb-[2px] text-center mx-[10px] capitalize'>username</label>
                    <input type="text" id='email' className='flex  border-black underline justify-start w-80 px-2 py-3 rounded-md '/>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginPage