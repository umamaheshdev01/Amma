
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
                {/* <Button className="md:w-auto h-10 bg-gray-600">
                 <AccountCircleIcon/>
                </Button> */}
                
                
            </div>
 

    </div> 
    );
}
 
export default ActionButtons;