import { signOut } from 'firebase/auth';
import  { auth } from '../../firebaseconfig';



export default function Logout() {

    const signuserout = async () => {
        await signOut(auth)
        cookies.remove("auth-token");
        navigate('/login')
      }
  return (
    <div>
     <button className='button2' onClick={signuserout}>sign out</button>

    </div>
  )
}