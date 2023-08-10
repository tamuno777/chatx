import React from 'react'
import {BiSolidSend} from 'react-icons/bi'
import { Link, useLocation } from "react-router-dom";
import { signOut } from 'firebase/auth';
import Cookies from 'universal-cookie'
import { db, auth } from "../../firebaseconfig";
import { getDocs,collection,addDoc,deleteDoc,doc, updateDoc,serverTimestamp } from 'firebase/firestore'

import { useState, useRef ,useEffect} from 'react'


const cookies = new Cookies()



export default function Chatsection(setIsloggedin,friend) {
    const [allmessages, setAllMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesRef = collection(db, "main");
    const signuserout = async () => {
        await signOut(auth)
        cookies.remove("auth-token");
        setIsloggedin(false)
      }
    

    const getMessages = async () => {
      try {
        const data = await getDocs(messagesRef);
        const filtteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setAllMessages(filtteredData)

      } catch (e) {
        console.log(e)
      }
    }
    useEffect(() => {
      getMessages();
    }, []);
     
    const onSubmitmessage = async () => {
      try {
        await addDoc(messagesRef, {
          text: newMessage,
          userPic: auth?.currentUser?.photoURL,
          time: serverTimestamp(),
          userId: auth?.currentUser?.uid,
          userName: auth.currentUser.displayName,

        });
        getMessages();
      } catch (err) {
        console.error(err);
      }
    };
  



  return (
    <div className='d-flex mt-5 justify-content-center bg-dark con'>
         <div className="card"  >
         <Link  className='button2  ' onClick={signuserout}>
             sign out
             {/* <input type="hidden" value={Friend} name="Friend" /> */}
     
     
             </Link>
                <div className="nav-bar bg-secondary">
                    <p>chatroom</p>
                    
                </div>
                <div className="messages-area text-white">

                    <div>
                        {allmessages.map((message) => (
                            <div 
                            key={message.id} 
                            className="message one text-dark">

                                <span className="user me-2 " >
                                  <img style={{width:"20px"}} src={message.userPic} alt="" />:
                                  </span>
                                   {message.text}
                                
                            </div>

                            ))} 
                    </div>
                   
                    


                    <div className="sender-area  d-flex">
                        <div className="input-place m-1">
                            <input placeholder="Send a message." className="send-input" value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
           type="text"/>
                            
                        </div>
                        <div className="send">
                                <button type='submit' onClick={onSubmitmessage}   className="send-icon btn"><BiSolidSend/></button>
                            </div>
                    </div>


                </div>
               
               
            <div>

        </div>

            </div>
    </div>
  )
}
