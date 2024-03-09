
"use client"
import { Button } from "@/components/ui/button";
import * as React from 'react';
import  sidenavData  from './sidenav/sidenavData';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import './sidenav/sidenav.css';
import { IconContext } from 'react-icons';
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
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return ( 
    <div>


<IconContext.Provider value={{ color: '#fff' }}>
<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link href='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {sidenavData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
</IconContext.Provider >















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
                            Sign out 
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
                <Button onClick={()=>setSidebar(prev=>!prev)} className="md:w-auto  bg-gray-600">
                 <AccountCircleIcon/>
                </Button>
                <Link href="/auth">
                <Button
                className="text-md bg-blue-500">
                    Sign out
                </Button> </Link>            
            </div>
    </div> 
    );
}
 
export default ActionButtons;