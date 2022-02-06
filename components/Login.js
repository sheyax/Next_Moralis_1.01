import React from 'react';
import {useMoralis} from 'react-moralis'

export default function Login() {
    const {authenticate, authError}= useMoralis();
  return (
    <div className="container bg-blue">
        <div className='card'>
            <h3>Welcome to Moralis Sample</h3>

            {
                authError && <p>{authError.message}</p>
            }
            <button onClick={authenticate}> Login to Moralis</button>
        </div>
    
    </div>
  );
}
