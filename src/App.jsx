import Login from "./pages/Login"
import Navbar from './components/Navbar'
import ChatRoom from "./pages/ChatRoom"
import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./Routes/PrivateRoute"
function App () {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/chat" element={<PrivateRoute><ChatRoom/></PrivateRoute>}/>

      
      </Routes>
      
    </div>
  )
}

export default App
