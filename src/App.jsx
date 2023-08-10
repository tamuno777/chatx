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

            <Chatapp friend={friend}  setIsloggedin={setIsloggedin} />

     
     
       

   

    </>
  )
}

export default App
