
import { Button } from "@/components/ui/button";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
  import { AlignJustify } from "lucide-react";

  import Link from "next/link";


const ActionButtons = () => {
    return ( 
    <div>
<div className="md:hidden">
    <Sheet>
        <SheetTrigger>
            <AlignJustify />
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetDescription>
                    <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                        <Link
                        href="/"
                        >
                            Sign in 
                        </Link>
        
                        <Link
                        href="/"
                        >
                            Contact
                        </Link>
                        <Link
                        href="/"
                        >
                            About
                        </Link>
                    
                
                    </div>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>
    </div>


            <div className="hidden md:flex md:space-x-4">
                
                <Button
                className="text-md bg-blue-500 pl-5 pr-5">
                    Login
                </Button>
                <Button
                className="text-md bg-blue-500">
                    Sign up
                </Button>
            </div>
 

    </div> 
    );
}
 
export default ActionButtons;