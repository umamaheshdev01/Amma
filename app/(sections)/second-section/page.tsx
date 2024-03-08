

  'use client'

  import React from "react"
  import Image from "next/image"


  const features = [
  {
    name: "Community Focus",
    description:
      "We're more than just a delivery service; we're a community of local chefs and food enthusiasts dedicated to sharing homemade goodness with our neighbors.",
    image: "/images/icon-location.png",
    alt: "Community Focus",
    color: "blue"
  },
  {
    name: "Fast ",
    description:
      "Enjoy lightning-fast delivery times with our efficient service. We prioritize quick order processing and swift delivery to ensure your food reaches you hot and fresh, right when you need it.",
    image: "/images/Fast.png",
    alt: "Fast",
  },
  {
    name: "Convenience",
    description:
      "Ordering with us is a breeze! With our easy-to-use website and streamlined process, you can have delicious homemade meals delivered right to your door in no time.",
    image: "/images/Convenience.png",
    alt: "Convenience",
  },
  {
    name: "Safety and Hygiene",
    description:
      "Your health is our priority. We maintain rigorous hygiene standards and follow strict safety protocols to ensure that every meal is prepared and delivered with the utmost care and cleanliness.",
    image: "/images/safety-and-healthy.png",
    alt: "Safety and Hygiene",
  },
  {
    name: "Loyalty",
    description:
      "Join our loyalty program and enjoy exclusive perks and rewards with every order. We value your support and show our appreciation with special discounts and incentives.",
    image: "/images/Loyality.png",
    alt: "Loyalty",
  },
  {
    name: "Support",
    image: "/images/icon-support-1.png",
    description: "Need assistance? Our dedicated support team is here to help. Whether you have questions about your order or special requests, we're just a message or call away, to satisfaction.",
    alt: "Support",
  },
  ]

  const SecondSection = () => {
  return ( 
  <div className="">
    <div className="
  md:flex-row

  flex-col
  items-center
  flex  justify-center pb-10
    
    ">
        <div className="p-5 justify-center md:w-1/3">
            <div className="
            bg-gradient-to-r
            from-blue-800
            to-green-300
            bg-clip-text
            text-transparent
            text-4xl
            md:text-6xl
            font-bold
            pb-10
            
            ">
                From Our Kitchen to Your Table. Authentic Indian Flavors, Homemade with Love

            </div>
            <div className="text-2xl mb-8">
            {/* Built for all businesses and communities, Bird is the only platform you need to grow your business. */}

            </div>
            <button className="bg-blue-500 text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-blue-600">
                    About Us
            </button>
            </div>
            

            <video className="rounded-xl md:w-2/5 p-4 md:p-0 "  autoPlay muted loop >
                <source src="/content/video-2.mp4" type="video/mp4" />

            </video>

        </div>

        <div className="flex-col items-center justify-center">
            <div className="
            text-3xl
            flex
            justify-center
            md:text-5xl
            font-bold
            pt-5
            pb-10
            bg-gradient-to-r
            from-purple-400
            to-blue-800
            bg-clip-text
            text-transparent">
                  Features
            </div>

            <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
                {features.map((feature, index) => (
                    <div
                    key={index}
                    className="flex-col space-y-6 pb-10 border
                    
                    p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
                    "
                    >
                        <div className="
                        text-gray-600 text-3xl font-bold
                        ">
                            <Image
                            src={feature.image}
                            alt={feature.alt}
                            width={300}
                            height={300}
                            className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                            />
                            <div>
                                <div className="text-2xl pb-4 bg-gradient-to-t
                                from-black
                                to-gray-400
                                bg-clip-text
                                text-transparent

                                
                                
                                ">{
                                feature.name}
                                </div>

                                <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg">
                                    {feature.description}




                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </div>



  );
  }

  export default SecondSection;