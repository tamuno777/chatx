import React from 'react'
import {BiSolidSend} from 'react-icons/bi'
import { Link, useLocation } from "react-router-dom";
import { signOut } from 'firebase/auth';
import Cookies from 'universal-cookie'
import { db, auth } from "../../firebaseconfig";
import {collection,addDoc,serverTimestamp,  onSnapshot,where, query,
    orderBy,} from "firebase/firestore";
import { useState, useRef ,useEffect} from 'react'


const cookies = new Cookies()



export default function Chatsection(setIsloggedin,friend) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesRef = collection(db, "main");
    const signuserout = async () => {
        await signOut(auth)
        cookies.remove("auth-token");
        setIsloggedin(false)
      }
      useEffect(() => {
        const queryMessages = query(
          messagesRef,
          where("name", "==", friend),
          orderBy("createdAt")
        );
        const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
          let messages = [];
          snapshot.forEach((doc) => {
            messages.push({ ...doc.data(), id: doc.id });
          });
          console.log(messages);
          setMessages(messages);
        });
    
        return () => unsuscribe();
      }, []);


      const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (newMessage === "") return;
        await addDoc(messagesRef, {
          text: newMessage,
          createdAt: serverTimestamp(),
          user: auth.currentUser.displayName,
          room,
        });
    
        setNewMessage("");
      };

  return (
    <div>
         <div className="chat-room">
         <Link  className='button2  ' onClick={signuserout}>
             sign out
             {/* <input type="hidden" value={Friend} name="Friend" /> */}
     
     
             </Link>
                <div className="nav-bar">
                    <p>chatroom</p>
                    <div className="close">
                        <div className="line one"></div>
                        <div className="line two"></div>
                    </div>
                </div>
                <div className="messages-area">

                    <div>
                        {messages.map((message) => (
                            <div key={message.id} className="message two">
                                <span className="user">{message.user}:</span> {message.text}
                                
                            </div>

                            ))}
                    </div>
                    <div className="message one"></div>
                    <div className="message two"></div>
                    <div className="message three"></div>
                    <div className="message four"></div>
                    <div className="message five"></div>
                    <div className="message two"></div>
                    <div className="message three"></div>
                    <div className="message two"></div>


                    <div className="sender-area ">
                        <div className="input-place mx-5">
                            <input placeholder="Send a message." className="send-input" value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
           type="text"/>
                            <div className="send">
                                <button type='submit' onSubmit={handleSubmit}  className="send-icon btn"><BiSolidSend/></button>
                            </div>
                        </div>
                    </div>


                </div>
               
               
            <div>

        </div>

            </div>
    </div>
  )
}
