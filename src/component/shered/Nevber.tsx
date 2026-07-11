'use client'
import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";



const Nevber = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const links = ( <>
      <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#" className="font-medium text-accent" aria-current="page">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
     </>
     )

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
            <p className="font-bold">ACME</p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
         {links}
        </ul>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="#">Login</Link>
          <Button>Sign Up</Button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
           {links}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nevber;