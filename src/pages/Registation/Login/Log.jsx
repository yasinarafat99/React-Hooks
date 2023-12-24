import React from 'react'
import { useNavigate } from 'react-router-dom';

function Log() {
    const navigate = useNavigate()
    const handleBack = () =>{
      navigate(-1)
    };
    const handleGoHome = () => {
        navigate('/')
    };
  return (
    <div>
        <div>Login</div>
      <button onClick={handleBack}>Go back</button>
      <button onClick={handleGoHome}>Home</button>
    </div>
  )
}

export default Log;