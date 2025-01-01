"use client"

import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-950 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/str2.png"
            alt="Hero 2 Image"
            width={50}
            height={50}
            className="rounded-2xl hover:scale-150"
          />
          <Link
            className="ml-4 text-xl lg:text-3xl font-bold hover:scale-y-150 lg:hover:scale-110 hover:text-yellow-500"
            href="/"
          >
            Star Electronic Store
          </Link>
        </div>

        {/* Hamburger Button for Mobile */}
        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-4 lg:font-bold absolute lg:static bg-blue-950 w-full left-0 top-16 lg:top-0 lg:bg-transparent lg:w-auto p-4 lg:p-0`}
        >
          <li className="hover:underline hover:scale-y-125 lg:hover:scale-125 hover:text-yellow-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline hover:scale-y-125 lg:hover:scale-125 hover:text-yellow-300">
            <Link href="/AllProducts">All Products</Link>
          </li>
          <li className="hover:underline hover:scale-y-125 lg:hover:scale-125 hover:text-yellow-300">
            <Link href="/Cart">Cart</Link>
          </li>
          <li className="hover:underline hover:scale-y-125 lg:hover:scale-125 hover:text-yellow-300">
            <Link href="/About">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
