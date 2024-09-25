import Navbar from "./components/Navbar"
import Form from "./components/Form";
import About from "./about";
import { useState } from "react";
import Alert from "./components/alert.jsx";
import { createBrowserRouter , RouterProvider } from "react-router-dom";





 function App(){

      const [mode , setMode] = useState('light')
   
const [alert , setAlert] = useState(null)

//This is REact Router DOM


const Saw =  (m , type) =>{
  setAlert({
  msg: m ,
  type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);
  }













      const toggleMode = ()=>{
        if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#3C3D37';
      Saw("Dark mode has been enabled!" , "success ")
        }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        Saw("Light mode has been enabled!" , "success ")
        
      }
      }



 const router = createBrowserRouter([
  {
    path: '/',
  element: <>   <Navbar title="Home" con="About" md={mode} change={toggleMode} />
<Alert popup={alert}/>         <Form heading="Enter the text to analyze" md={mode} sa={Saw}/>    </>  },

{
  path: '/about',
  element: <>  <Navbar title="Home" con="About" md={mode} change={toggleMode} /> <About/>  </>
}

 ])





      return(
          <>


<RouterProvider router={router}/>







   
        </>
      )



}

 


export default App;