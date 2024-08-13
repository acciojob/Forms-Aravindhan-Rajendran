import React from 'react'
 
const Card = (props) => {
  return (
    <div>
    <form id='info-form'>
     <input id='full_name' type='text' placeholder='Full Name' required /><br/>
     <input id='email'  placeholder='Email' type='email' required /><br/>
     <input id='password'  placeholder='Password' type='password' required /><br/>
     <input id='password_confirmation'  placeholder='Confirm Password' type='password' required /><br/>
     <button onClick={props.submit}>Submit</button>
    </form>
</div>
  )
}
 
export default Card;
