import Title from "./Title";
   import FallingHearts from "../components/HeartEffect";
   
   export default function Gallery() {
     const images = [
       "/images/first.jpg",
       "/images/second.jpg",
       "/images/third.jpg",
       "/images/fourth.jpg",
       "/images/fifth.jpg",
       "/images/sixth.jpg",
       "/images/seventh.jpg",
       "/images/eight.jpg",
     ];
   
     return (
       <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
         <FallingHearts />
         
         <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
           <div className="mb-16 text-center">
             <Title />
           </div>
   
           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
             {images.map((image, index) => (
               <div
                 key={index}
                 className="group relative aspect-square overflow-hidden rounded-xl md:rounded-2xl bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-500"
               >
                 <img
                   src={image}
                   alt={`Gallery ${index + 1}`}
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
               </div>
             ))}
           </div>
         </div>
       </div>
     );
   }