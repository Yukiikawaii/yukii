import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
       <nav className="bg-pink-300">
        
        <div  className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
            <div className="flex-1 p-4">
              <h1 className="text-lg font-bold text-amber-50">Yukii & Arya🤍</h1>
            </div>
        <div className="p-5 flex gap-4 py-4">
        <NavLink to="/" className="bg-pink-200 p-2 rounded-lg text-white  hover:bg-pink-400 transition duration-200 hover:scale-95 shadow-2xl">Home</NavLink>
        <NavLink to="Gallery" className="bg-pink-200 p-2 rounded-lg text-white hover:bg-pink-400 transition duration-200 hover:scale-95 shadow-2xl">Gallery</NavLink>
        </div>
        </div>
       </nav>
    )
}