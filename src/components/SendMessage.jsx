import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react"
import { db } from "../Firebase";
import { UserAuth } from "../context/AuthContext";

function SendMessage () {

    const [message, setMessage] = useState("");
    const {currentUser} = UserAuth();
    console.log(currentUser)

    


    const handleSendMessage = async(e) =>{

      e.preventDefault();
      if(message.trim() === ""){
        alert("enter valid message")
        return ;
      }
      const {uid, displayName, photoURL} = currentUser
      console.log(uid, displayName, photoURL)
        try {
          await addDoc(collection(db, "Messages"),{
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid:uid
          })
          
        } catch (error) {
          console.log("error at send message"+error)
        }
        // console.log(message);
        setMessage("");
    }
  return (
    <div className='fixed bottom-0 shadow-lg bg-gray-200 w-full py-10'>
      <form onSubmit={handleSendMessage} className='containerWrap flex px-2'>
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          className='input focus:outline-none w-full rounded-r-none bg-gray-100'
          type='text'
        />
        <button type="submit" className='bg-gray-700 px-4 rounded-r-lg text-white w-auto text-sm'>
          Send
        </button>
      </form>
    </div>
  )
}

export default SendMessage
