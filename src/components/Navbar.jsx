import { UserAuth } from "../context/AuthContext"

function Navbar () {
  const {signOut} = UserAuth();
  const handleSignOut = () =>{
    signOut()
  }
  return (
    <div className='navbar bg-neutral text-neutral-content'>
      <div className='containerWrap flex justify-between'>
        <button className='btn btn-ghost text-xl'>Chat App</button>
        <button onClick={handleSignOut} className='btn btn-neutral'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
