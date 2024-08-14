import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
function PrivateRoute({children}) {
    const {currentUser} = UserAuth();
    console.log(currentUser)

    if(!currentUser){
        return <Navigate to="/" replace={true}/>
    }
    //! issue 1: {children}
    //? error due to issue 1:Uncaught Error: Objects are not valid 
    //? as a React child (found: object with keys {children}). If you meant to render a collection of children, use an array instead.
  return children
}

export default PrivateRoute