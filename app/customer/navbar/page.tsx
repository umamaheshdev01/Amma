


import ActionButtons from "./action-buttons";
import Logo from "./logo";
import { NavigationMenuBar } from "./navigation-bar";

const Navbar = () => {
    return ( <div className="
    flex
    justify-between
    items-center px-10 border-b h-30
    ">
       <Logo />
       <NavigationMenuBar />
       <ActionButtons />
    </div> );
}
 
export default Navbar;