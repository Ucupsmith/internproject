import React from 'react'
import {UserOutlined} from '@ant-design/icons'
import { Button, Input } from 'antd'
import {LockOutlined} from '@ant-design/icons'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
import { useState } from 'react'
const LoginPage = () => {

    const [open, setOpenClick] = useState(false)
    
    const handleClick = ()=>{
        setOpenClick(!open)
    }
    

  return (
    <>
        <div className="w-full fit bg-gradient-to-b from-blue-500 to-purple-500 justify-center flex mt-[25px] items-center content-center">
            <div className="w-96 h-full pt-[25px] mt-[25px] border rounded-md bg-white flex flex-col mb-[25px]">
                <h1 className="font-bold text-center text-4xl capitalize ">login</h1>
                <div className="w-96 mt-[25px] flex flex-col items-start justify-center">
                    <label htmlFor="email" className='mt-[25px] flex px-[25px] justify-start py-3 w-full mb-[2px] text-center capitalize '>username <UserOutlined className='mx-[5px]'/></label>
                    <Input id='email' className='w-80 mx-[25px]' placeholder='Email' />
                    <label htmlFor="password" className='mt-[25px] flex px-[25px] justify-start py-3 w-full mb-[2px] text-center capitalize '>password <LockOutlined className='mx-[5px]'/></label>
                    <Input id='password' className='w-80 mx-[25px]' placeholder='Email' />
                    <div className="w-full flex mb-[25px] justify-center content-center mt-[25px]">
                        <Button color='red' block size='large' className='mx-[24px]'>click here</Button>
                    </div>
                    <Accordion onClick={handleClick} open className='mb-[25px]'>
                        <AccordionHeader className='mx-[25px] w-80 capitalize'>what is material tailwindcss</AccordionHeader>
                        <AccordionBody className='mx-[25px]'>pop out accordion!</AccordionBody>
                    </Accordion>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default LoginPage