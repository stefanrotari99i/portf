"use client";

import Link from "next/link";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Header = () => {
  useGSAP(() => {
    gsap.to(".nav-item", {
      scale: 1,
      rotate: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
      stagger: 0.2,
      delay: 0.2,
    });
  });
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-[#131313]  z-50 border-b border-neutral-700">
      <nav className="flex justify-between items-center w-full h-full px-6">
        <Link
          className="nav-item scale-0 opacity-0 text-4xl h-full flex items-center justify-center tracking-wide uppercase text-white transition-colors duration-300 ease-in-out border-r border-neutral-700 pr-6"
          href="/"
        >
          projects
        </Link>
        <Link
          className="nav-item scale-0 opacity-0 text-4xl tracking-wide uppercase text-yellow-500"
          href="/"
        >
          stefan rotari
        </Link>
        <Link
          className="nav-item scale-0 opacity-0 text-4xl tracking-wide h-full flex items-center justify-center uppercase text-white transition-colors duration-300 ease-in-out border-l border-neutral-700 pl-6"
          href="/"
        >
          get in touch
        </Link>
      </nav>
    </div>
  );
};

export default Header;
