import { UserAuth } from "../context/AuthContext"

function Navbar () {
  const {currentUser,setCurrentUser,logout} = UserAuth();
  const handleSignOut = async() =>{
    try {
      await logout()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='navbar bg-neutral text-neutral-content'>
      <div className='containerWrap flex justify-between'>
        <button className='btn btn-ghost text-xl'>Chat App</button>
        {currentUser ? <button onClick={handleSignOut} className='btn btn-neutral'>Logout</button> : ""}
      </div>
    </div>
  )
}

export default Navbar
