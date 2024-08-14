import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext"
import { useEffect } from "react";

function Login () {
  const navigate = useNavigate();
  const {currentUser, signInWithGoogle} = UserAuth();
  console.log(currentUser)
  
  const handleLogin = async() =>{
    console.log("handle login clicked")
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log( "error at login page "+ error)
    }
  }
  useEffect(() => {
    if(currentUser){
      navigate("/chat")
    }
  }, [currentUser])
  
  return (
      <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold'>Hello there</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button onClick={handleLogin} className='btn '>Login With Google</button>
          </div>
        </div>
      </div>
  )
}

export default Login
