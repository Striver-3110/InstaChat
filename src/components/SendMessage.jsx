import { useState } from "react"

function SendMessage () {

    const [message, setMessage] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(message);
        setMessage("");
    }
  return (
    <div className='fixed bottom-0 shadow-lg bg-gray-200 w-full py-10'>
      <form onSubmit={handleSubmit} className='containerWrap flex px-2'>
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
