
"use client"
import { Button } from "@/components/ui/button";
import * as React from 'react';

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
import { useState } from "react";
import SideBar1 from './sidebar/SideBar1'

const ActionButtons = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
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
                        href="/auth"
                        >
                            Sign in 
                        </Link>
        
                        <Link
                        href="/auth"
                        >
                            Contact
                        </Link>
                        <Link
                        href="/auth"
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
                <Link href="/auth">
                <Button
                className="text-md bg-gray-600 pl-5 pr-5">
                    Login
                </Button></Link>
                <Link href="/auth">
                <Button
                className="text-md bg-blue-500">
                    Sign up
                </Button> </Link>  
                {/* <Button className="md:w-20 h-10 bg-gray-600" onClick={toggleSidebar}>
                    User 
                </Button>
                
                {showSidebar && <SideBar1 />} */}
            </div>
 

    </div> 
    );
}
 
export default ActionButtons;