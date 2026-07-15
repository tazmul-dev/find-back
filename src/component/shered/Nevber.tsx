'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";



const Nevber = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [toggle, setToggle] = useState("login")
    const { data:session } = authClient.useSession()

 const user = session?.user
//  console.log(user,"user")

     const links = ( <>
      <li>
            <Link href="/browseItems">Browse Items</Link>
          </li>
          <li>
            <Link href="/addItem">
              AddItem
            </Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
     </>
     )
     const loginbtn = (<>

      {user? 
   <button onClick={async()=>{await authClient.signOut(); redirect('/auth/signIn')}} className="btn text-red-500">SingOut</button>
  :<div className="flex gap-2">

       <Link
          onClick={()=>setToggle('login')}
           className={`${toggle ==='login'? ' btn btn-primary ': 'btn'}`}
            href="/auth/signIn"
            
          >
            Login
          </Link>

          <Link
          onClick={()=>setToggle('register')}
            className={`${toggle ==='register'? ' btn btn-primary ': 'btn'}`}
            href="/auth/signUp"
            
          >
            Register
          </Link>
    </div>}
    
     </>)

     return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 container items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            {/* <Logo /> */}
            <p className="font-bold">FindBack</p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
         {links}
        </ul>
        <div className="hidden items-center gap-4 md:flex">
          {loginbtn}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
           {links}
          </ul>
          
          {loginbtn}
        </div>
      )}
    </nav>
  );
};

export default Nevber;