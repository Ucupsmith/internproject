import React from 'react'
import axios from 'Axios'
import NativeBtn from '@/component/button/NativeBtn'
import NativeInput from '@/component/input/NativeInput'
import { useState, useEffect } from 'react'
import MaterialtailwindInput from '@/component/input/MaterialtailwindInput'
import MaterialtailwindBtn from '@/component/button/MaterialtailwindBtn'
import LoginPage from '@/component/login/LoginPage'
import AntButton from '@/component/button/AntButton'
import AntInput from '@/component/input/AntInput'
const index = () => {

  
  return (
    <>

      
        <NativeBtn />
        <NativeInput />
        <MaterialtailwindBtn/>
        <MaterialtailwindInput/>
        <AntButton/>
        <AntInput/>
        
        <LoginPage/>

    </>
  )
}

export default index