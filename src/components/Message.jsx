function Message (props) {
  return (
    <div className='text-white'>
      <div className='chat chat-start'>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img
              alt='Tailwind CSS chat bubble component'
              src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
            />
          </div>
        </div>
        <div className='chat-header'>
            {props.message.name + " "}
        </div>
        <div className='chat-bubble'>{props.message.message}</div>
        <div className='chat-footer opacity-50'>Delivered</div>
      </div>
    </div>
  )
}

export default Message
