"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

    export default function Navbar() {

         const pathname = usePathname();
         const [open, setOpen] = useState(false);

  const navLink = (path, label) => (

    <Link
      href={path}
      onClick={() => setOpen(false)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition
        ${
          pathname === path
            ? "bg-sky-500 text-white shadow"
            : "text-gray-700 hover:text-sky-600 hover:bg-sky-50"
        }`}
    >
      {label}
    </Link>
  );

  return (

     <header className="bg-white border-b shadow-sm sticky top-0 z-50">

        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        <Link
           href="/"
           className="flex items-center gap-1 text-xl font-extrabold"
        >

          <span className="text-sky-500"> 🧱 </span>
          <span className="text-gray-800"> Tiles </span>
          <span className="text-sky-500"> Gallery </span>

        </Link>

        <nav className="hidden md:flex gap-2">

          {navLink("/", "Home")}
          {navLink("/all-tiles", "All Tiles")}
          {navLink("/my-profile", "Profile")}

        </nav>

 <div className="hidden md:flex gap-2">

     <Link
         href="/login"
         className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm transition shadow"
      >

         Login

     </Link>

      <Link
        href="/register"
         className="border border-sky-500 text-sky-600 hover:bg-sky-50 px-4 py-2 rounded-md text-sm transition"
      >

        Register

     </Link>

     </div>

     <button

       className="md:hidden text-2xl"
       onClick={() => setOpen(!open)}

     >
         ☰

     </button>

     </div>

     
 {open && (
     <div className="md:hidden flex flex-col gap-2 px-4 pb-4 border-t">

       {navLink("/", "Home")}
        {navLink("/all-tiles", "All Tiles")}
        {navLink("/my-profile", "Profile")}

     <Link
         href="/login"
         onClick={() => setOpen(false)}
         className="bg-sky-500 text-white px-4 py-2 rounded-md text-sm text-center"
     >

       Login

     </Link>

      <Link
         href="/register"
         onClick={() => setOpen(false)}
        className="border border-sky-500 text-sky-600 px-4 py-2 rounded-md text-sm text-center"
      >

       Register

   </Link>

   </div>

   )}

    </header>
  );
}