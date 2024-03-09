import amma from './Amma.jpeg'
import Image from "next/image";

const Logo = () => {
    return ( <div>


        <Image 
        src={amma} 
        width={100} 
        height={100} 
        alt="logo"
        />
    
    </div> );
}
 
export default Logo;