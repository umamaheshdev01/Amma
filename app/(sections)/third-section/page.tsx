
import Image from "next/image";



const ThirdSection = () => {
    return ( <div className="
    flex
    p-10
    flex-col md:flex-row md:justify-evenly
   
    ">
        <div className="flex-col md:flex-row gap-6 md:px-10 flex">
            <div className="md:w-2/3 w-full">
                <video className="rounded-xl" autoPlay muted loop>
                    <source src="/content/video-3.mp4" type="video/mp4" />

                </video>

            </div>

            <div className="flex-col border p-4 rounded-xl md:w-2/5">
                <div className="text-4xl flex justify-center text-center
                md:text-6xl
                bg-gradient-to-l
                from-yellow-300
                to-blue-300
                bg-clip-text
                font-bold
                text-transparent
                
                
                ">
                    What Our Customers Say 
                </div>

                <div className=" space-y-6 flex-col items-center justify-center">
                <div className="flex-col">
                    <div className="text-lg flex items-center gap-5">
                        <Image
                        src="/images/user1.png"
                        alt="feature-1"
                        width={70}
                        height={70}
                    
                        />
                        <div className="flex flex-col gap-2">
                            <br />
                        Delightful experience! The homemade lasagna was absolutely delicious, and the delivery was right on time. Will definitely be ordering again!

                        </div>
                    </div>
                 </div>
                    

                    <div className="flex-col">
                        <div className="text-lg flex items-center gap-5" >
                            <Image
                            src="/images/user2.png"
                            alt="feature-1"
                            width={70} 
                            height={70}
                            />
                            <div>
                            From order to delivery, everything was smooth sailing. I appreciate the convenience and reliability of this service.

                            </div>
                    </div>

                    </div>

                    <div className="flex-col">
                        <div className="text-lg flex items-center gap-5" >
                            <Image
                            src="/images/user2.png"
                            alt="feature-1"
                            width={70} 
                            height={70}
                            />
                            <div>
                            The homemade pies were a hit at our family gathering. Everyone raved about how tasty they were. Can't wait to try more from the menu

                            </div>
                    </div>

                    </div>

                    <div className="flex-col">
                        <div className="text-lg flex items-center gap-5" >
                            <Image
                            src="/images/user4.png"
                            alt="feature-1"
                            width={70} 
                            height={70}
                            />
                            <div>
                            Supporting local businesses has never been easier or more delicious. I'm hooked!

                            </div>
                    </div>

                    </div>






                </div>


            </div>

        </div>
    

    </div> );
}
 
export default ThirdSection;