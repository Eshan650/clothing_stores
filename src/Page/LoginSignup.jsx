import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsingup'>
      <div className="loginsingup-container">
        <h1>Sing Up</h1>
        <div className="loginsingup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsingup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsingup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup