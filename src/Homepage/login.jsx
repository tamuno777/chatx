import React from 'react'
import {auth, provider} from "../../firebaseconfig"
import { signInWithPopup } from "firebase/auth"
import Cookie from 'universal-cookie'

const cookies = new Cookie()

export default function Login({ setIsloggedin }) {
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsloggedin(true);

        } catch (err) {
            console.error(err);
          }
    }
  return (
    <div className='auth-container '>
        <div className="d-flex justify-content-center ">
            <div className="form">
                <p id="heading">Login</p>
                <div className="field">
                <lord-icon 
                    className="lord-icon"
                    src="https://cdn.lordicon.com/ljvjsnvh.json"
                    trigger="loop"
                     delay="2000"
                    style={{width:"100px",height:"100px"}}>
                </lord-icon>

                </div>
                <div className="btn">
               
                <button type='submit'  className="button2"  onClick={signInWithGoogle} >Login & Sign Up</button>
                </div>
                <button className="button3">Forgot Password</button>
                
            </div>
        </div>
       
    </div>
    
  )
}
