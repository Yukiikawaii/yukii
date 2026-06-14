import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App(){
  return(
    <div className="bg-pink-100 w-full h-full">
      
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={ <Home/>}/>
        
        <Route path="Gallery" element={  <Gallery/>}/>
    

      </Routes>
     
      </BrowserRouter>
      
    </div>
  )
}