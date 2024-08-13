import React, { useState } from 'react'
import Card from './Card'
 
const FormState = () => {
    const [submitstate,setsubmitstate]=useState('')
    const submit=()=>{
        setsubmitstate(submitstate=>{
         const val=  'Form submitted by useState';
         console.log(val)
         return val;
        });
    }
  return (
    <div>
        <Card submit={submit} />
        {submitstate}
    </div>
  )
}
 
export default FormState;
