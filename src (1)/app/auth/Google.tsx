'use client'

import {signIn} from 'next-auth/react';
function LoginWithGoogle() {
    return(
      <button onClick={async() => { await signIn('google')}} type='button' 
      className='py-2 px-4 w-full border-gray-600 border rounded-md flex justify-center gap-x-2 items-center'>
        <img src="/svg/google.svg" alt="svg-google-icon" className="w-5 h-5" />
        <span>Đăng nhập bằng Google </span>
    </button>
    )
}

export default LoginWithGoogle;