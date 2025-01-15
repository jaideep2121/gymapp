'use client'
import React, { useState } from 'react'

import Link from 'next/link';
import { Dumbbell } from 'lucide-react';
import { Moon, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 


const Navbar = () => {
    const[isclick,setisclick]=useState(false);
    function toggle(){
        setisclick(!isclick);
        
        
        }
        const { setTheme } = useTheme()

        const toggleTheme=()=>{
          setTheme('dark');
          SetisDark(true);
  
      }
  
      const toggleTheme2=()=>{
          setTheme('light');
          SetisDark(false);
  
      }
      const [isDark,SetisDark]=useState(false);
  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b-2 border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2">
                <Dumbbell className="h-6 w-6" />
                <span className="font-bold text-lg">Elite Fitness</span>
              </Link>
              <div>
                {
                  
       isDark?<Moon onClick={toggleTheme2}></Moon>:<Sun onClick={toggleTheme}></Sun>
    
                }
              </div>
              
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-foreground/80 hover:text-gray-700 transition-colors">
                  Home
                </Link>
                <Link href="/contact" className="text-foreground/80  hover:text-gray-700 transition-colors">
                  Contact
                </Link>
                <Link href="/exercises" className="text-foreground/80  hover:text-gray-700 transition-colors">
                  Exercises
                </Link>
              </div>
              <div className='md:hidden flex items-center'>
                  <button className='inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
                  
                  ' onClick={toggle}>
                    {
                        isclick?(<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="50" viewBox="0 0 24 24">
<path d="M20.576,19.721l-6.707-9.287l4.354-5.399c0.433-0.538,0.349-1.325-0.188-1.758c-0.537-0.434-1.325-0.349-1.758,0.188	l-3.926,4.868L9.057,3.771C8.707,3.287,8.146,3,7.549,3H4.078C3.42,3,3.039,3.746,3.424,4.279l5.762,7.978l-5.409,6.707	c-0.433,0.538-0.349,1.325,0.188,1.758C4.196,20.909,4.474,21,4.749,21c0.365,0,0.727-0.159,0.974-0.465l4.981-6.176l4.24,5.87	c0.35,0.484,0.91,0.771,1.507,0.771h3.471C20.58,21,20.961,20.254,20.576,19.721z"></path>
</svg>):(<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="50" viewBox="0 0 50 50">
<path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
</svg>)
                    }
                  </button>
              </div> 
            </div>
          </div>
          {
            isclick && (
                <div className='md:hidden flex flex-col space-y-5'>
                <Link href="/" className="text-foreground/80 hover:text-gray-700 transition-color font-semibold  text-center">
                  Home
                </Link>
                <Link href="/contact" className="text-foreground/80  hover:text-gray-700 transition-colors font-semibold  text-center ">
                  Contact
                </Link>
                <Link href="/exercises" className="text-foreground/80  hover:text-gray-700 transition-colors font-semibold  text-center">
                  Exercises
                </Link> 
                </div>
            )
          }
        </nav>
  )
}

export default Navbar