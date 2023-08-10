import { useState, useRef } from 'react'
import Cookies from 'universal-cookie'
import Chatapp from './Chatapp/chatapp'
import {auth} from "../firebaseconfig"
import { Link, useLocation } from "react-router-dom";
import { signOut } from 'firebase/auth'
import './App.css'
import Login from './Homepage/login'
import Routers from './Router'
import Logout from './Logout/logout'


const cookies = new Cookies()

function App() {
  const [isLogedin,setIsloggedin] = useState(cookies.get("auth-token"))
  const location = useLocation();
  const [friend, setFriend] = useState("");

  const FriendInputRef = useRef()


 
  if (!isLogedin){
    return (
      <>
        
          <Login setIsloggedin={setIsloggedin}/>
        
      </>
    )
  }

  return (
    <>

      {/* {friend ? ( */}
            <Chatapp friend={friend}  setIsloggedin={setIsloggedin} />

      {/* ) : (

     <div className="active-friends  py-2 px-3" >
        
     
        <div className="d-flex">
        <div className="InputContainer">
             <input ref = {FriendInputRef} placeholder="Search.." id="input" className="input" name="text" type="text"/>
     
          </div >
          <button
          className="px-2  border ms-1"
          style={{borderRadius:"10px"}}
               //  get current value of inpute field from ref ans set room
                onClick={() => setFriend(FriendInputRef.current.value) }
               >
                 Enter
               </button>
        </div>     
         </div>
               )} */}

   

    </>
  )
}

export default App
