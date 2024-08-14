import { UserAuth } from "../context/AuthContext"

function Message (props) {
  console.log("message at message")
  console.log(props.message)
  console.log("currentUser at Message")
  const {currentUser} = UserAuth();
  console.log(currentUser)
  return (
    <div className='text-white'>
      <div className={`chat ${currentUser.uid !== props.message.uid ? 'chat-start' : 'chat-end'} `}>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img
              alt='Tailwind CSS chat bubble component'
              src={props.message.avatar??'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
            />
          </div>
        </div>
        <div className='chat-header'>
            {props.message.name??"unknown"}
        </div>
        <div className='chat-bubble'>{props.message.text ?? ''}</div>
        <div className='chat-footer opacity-50'>Delivered</div>
      </div>
    </div>
  )
}

export default Message
