import IMG from "../images/IMG.jpg";
import secIMG from "../images/secIMG.jpg"
import FallingHearts from "../components/HeartEffect";
export default function Home(){
    return(
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <FallingHearts/>
            <img src={IMG} alt="us"className="w-80 bg-white p-3 shadow-2xl rounded-lg rotate-2"/>
             <h1 className="mt-2 text-gray-500 italic text-lg">
    Every moment with you is my favorite.
  </h1>
            <img src={secIMG} alt="us" className="w-80 bg-white p-3 shadow-2xl rounded-lg rotate-3"/>
        </div>
    )
}