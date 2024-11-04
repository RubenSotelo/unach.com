import { BrowserRouter, useLocation  } from "react-router-dom";
import './App.css'
import { Suspense } from "react";
import { Router } from "./routes/Router";
import Loader from "./component/auth/Loader";
import { Navbar } from "./component/Navbar";  

function App() {
  
  return (
    
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Suspense fallback={<Loader/>}>
        <Router/>
      </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
