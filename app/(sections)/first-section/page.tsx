
import Link from "next/link";

const FirstSection = () => {
    return ( 
    <section className="md:py-10 bg-gradient-to-r from gray-00 to-gray-200 spacey-10">
        <div className="container mx-auto text-center">
            
            <div className="text-6xl flex justify-center font-bold md:px-20 pb-10
            text-gradient
            bg-gradient-to-r
            from-blue-500
            to-green-300
            bg-clip-text
            text-transparent


            
            ">
                Taste of Home, Made with Love
            </div>

            <p className="text-lg md:text-xl md-10
            bg-gradient-to-r
            from-black
            to-gray-400
            bg-clip-text
            text-transparent
            font-bold
            
            "
            >
                   Experience Home-Cooked Food, Curated with Care and Delivered to Your Door..
            </p>
            <div className="flex gap-4 justify-center pt-10">
               <Link href="auth"><button className="bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold">Order Now</button></Link>
               <button className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold">Explore</button>

            </div>

<<<<<<< HEAD
            <div className="pt-10">

       
                
            <video className="rounded-xl" autoPlay muted loop>
                <source src="/Amma\app\(sections)\first-section\pexels-pavel-danilyuk-6942484 (Original).mp4" type="video/mp4" />

=======
            <div className="pt-10 ">        
            <video className="rounded-xl md:ml-[140px]" autoPlay muted loop>
                <source src="/content/videoSec-1.mp4" type="video/mp4" />
>>>>>>> 768abe778663b2ba6a8dcbe4d70070be565b4b5e
            </video>
            </div>

        </div>
    
    </section> );
}
 
export default FirstSection;