import Message from "./Message"

function ChatBox() {
    const messages = [
        {
            id:1,
            message:"Hey There!",
            name:"jay"
        },
        {
            id:2,
            message:"hii!",
            name:"het"
        }
    ]
  return (
    <div className="pb-44 pt-20 containerWrap">
        {messages && messages.map(msg=>{
            return <Message key={msg.id} message={msg}/>
        })}
    </div>
  )
}

export default ChatBox