
'use client'

import * as React from "react"

import Link from "next/link"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

  import Logo from "./logo"

  const components: { title: string, description: string}[] = [
    {
        title: "Biryani",
    
        description:
          " Layers of aromatic rice and tender meat, a culinary masterpiece that transports you to the streets of India.",
      },
      {
        title: "Home-made Desserts",
    
        description:
          "Indulgent treats crafted with love and passion, bringing joy and sweetness to every occasion.",
      },
      {
        title: "Parathas",
    
        description:
          "Buttery layers of golden perfection, stuffed with savory fillings for a delightful culinary experience.",
      },
      {
        title: "Thali",
    
        description: "Bursting with colors and flavors, this vegetarian thali showcases a diverse array of dishes.",
      },
      {
        title: "Rotis",
    
        description:
          "Soft and fluffy rounds of whole wheat dough, lovingly cooked on a hot griddle.",
      },
      {
        title: "Homemade Snacks",
     
        description:
          "Elevate snack time with our homemade delights: crispy samosas, tangy chaats, and spicy pakoras crafted with love .",
      },
  ]



  export function NavigationMenuBar() {
    return (
      <NavigationMenu>
        <NavigationMenuList
        className="hidden md:flex md:space-x-4" >
          <NavigationMenuItem>
            <NavigationMenuTrigger>Locate Your Area</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Logo  />
                      <div className="mb-2 mt-4 text-lg font-medium">
                      AMMA'S RUCHI
                      </div>
                      <p className="text-md leading-tight text-muted-foreground">
                     Now available in your Local Area. 👩‍🍳
                      </p>
                    </a>
                  </NavigationMenuLink>
            
                </li>
                <ListItem  title="Pick Your Location">
                    
                </ListItem>
                {/* <ListItem  title="Demo">
                  How to build a store in 60 seconds with Bird
                </ListItem>
                <ListItem  title="Community">
                    Join the community and get help or support.
                </ListItem> */}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Search Food Item</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
              className="font-medium"
              >
                Request a Dish
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}

          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="
              font-medium">
                ContactUs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
   
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"