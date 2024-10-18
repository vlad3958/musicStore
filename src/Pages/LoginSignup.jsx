import React from 'react'

import './css/LoginSignup.css'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);
const LoginSignup = () => {
  return (
    <div className='login'>
       <Authenticator>
      {({ signOut, user }) => (
        <main >
          <h3>Hello {user.username} {user.signInDetails} </h3>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    </div>
  )
}

export default LoginSignup