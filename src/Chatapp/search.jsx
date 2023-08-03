// import React from 'react'
// import { Link, useLocation } from "react-router-dom";
// import { signOut } from 'firebase/auth';
// import  { auth } from '../../firebaseconfig';
// import Cookies from 'universal-cookie'
// import { useState, useRef } from 'react'
// import Chatsection from './chatsection';


// const cookies = new Cookies()

// export default function Search({setFriend, setIsloggedin, friend}) {
//   const location = useLocation();
//   const FriendInputRef = useRef()

//   // const isActive = location.pathname

//   const signuserout = async () => {
//     await signOut(auth)
//     cookies.remove("auth-token");
//     setIsloggedin(false)
//     // navigate('/login')
//   }
//   return (
//     <div className="active-friends  py-2 px-3">
        
     
//    <div className="d-flex">
//    <div className="InputContainer">
//         <input ref = {FriendInputRef} placeholder="Search.." id="input" className="input" name="text" type="text"/>

//      </div >
//      <button
//      className="px-2  border ms-1"
//      style={{borderRadius:"10px"}}
//           //  get current value of inpute field from ref ans set room
//            onClick={() => setFriend(FriendInputRef.current.value) }
//           >
//             Enter
//           </button>
//    </div>
   
//         <div className='py-3 px-5 mb-5 text-white' >
            
       
       
//         <p>lorem </p>
//         </div>
//         <Link  className='button2  ' onClick={signuserout}>
//         sign out
//         {/* <input type="hidden" value={Friend} name="Friend" /> */}


//         </Link>

        
//     </div>
//   )
// }
