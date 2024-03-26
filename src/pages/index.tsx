import React from 'react'
import axios from 'Axios'
import NativeBtn from '@/component/button/NativeBtn'
import NativeInput from '@/component/input/NativeInput'

import { Button } from 'react-daisyui'
import { useState, useEffect } from 'react'
import MaterialtailwindInput from '@/component/input/MaterialtailwindInput'
import MaterialtailwindBtn from '@/component/button/MaterialtailwindBtn'
import DaisyBtn from '@/component/button/DaisyBtn'
import DaisyInput from '@/component/input/DaisyInput'
const index = () => {

  
  return (
    <>

      
        <NativeBtn />
        <NativeInput />
        <MaterialtailwindBtn/>
        <MaterialtailwindInput/>
        <DaisyBtn/>
        <DaisyInput/>
      

    </>
  )
}

export default index