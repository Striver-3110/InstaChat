import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const currentUser = true;

    if(!currentUser){
        return <Navigate to="/" replace={true}/>
    }
  return children
}

export default PrivateRoute