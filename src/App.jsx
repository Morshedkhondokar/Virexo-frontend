import { Route, Routes } from "react-router"
import Home from "./pages/home/Home"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import NotFound from "./pages/NotFound"


const App = () => {
  return (
    <>
        <Routes>
          <Route element={<Home/>} index={true}/>
          
          <Route element={<Login/>} path="/login"/>
          <Route element={<Register/>} path="/register" />

          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
