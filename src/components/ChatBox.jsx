import { useEffect, useState } from 'react'
import Message from './Message'
import { collection, query, where, onSnapshot, orderBy, limit } from 'firebase/firestore'
import { db } from '../Firebase'
import { useSearchParams } from 'react-router-dom'

function ChatBox () {
    const [messages, setMessages] = useState([]);
//   const messages = [
//     {
//       id: 1,
//       message: 'Hey There!',
//       name: 'jay'
//     },
//     {
//       id: 2,
//       message: 'hii!',
//       name: 'het'
//     }
//   ]
  useEffect(() => {
    const q = query(
        collection(db, 'Messages'),
        orderBy("createdAt"),
        limit(50)
    )
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const messages = []
      querySnapshot.forEach(doc => {
        messages.push({...doc.data(), id: doc.id})
        // console.log(doc.data())
      })
      setMessages(messages)
      console.log(messages)
    })
    return () => unsubscribe;
  }, [])
  return (
    <div className='pb-44 pt-20 containerWrap'>
      {messages &&
        messages.map(msg => {
          return <Message key={msg.id} message={msg} />
        // console.log(msg)
        })}
    </div>
  )
}

export default ChatBox
