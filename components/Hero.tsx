"use client";

import { idgrotesk, millwon, mugesta } from "./fonts";
import { useRef, useState } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin);

gsap.registerPlugin(ScrollTrigger);
const pharagraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dicta perferendis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque dicta perferendis. Lorem ipsum dolor sit
            amet consectetur adipisicing el it. Cumque dicta perferendis.`;

const Hero = () => {
  const heroRef = useRef(null);
  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.to(".text", {
        width: "auto",
        duration: 1,
        ease: "slow",
      });
      tl.to(".line", {
        autoAlpha: 0,
        duration: 0.2,
        ease: "slow",
      });
      gsap.to(".name", {
        height: "auto",
        duration: 0.4,
        ease: "power3.out",
      });
    },
    { scope: heroRef }
  );

  return (
    <div
      className="w-full h-screen flex flex-col justify-end items-start p-6 relative"
      ref={heroRef}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={`overflow-hidden leading-none md:text-12xl tracking-widest font-black text-left text-main uppercase ${millwon.className}
      `}
        >
          <p
            className={`text-[9px] overflow-hidden ${mugesta.className} name h-0`}
          >
            i&apos;m a
          </p>
          <div>
            <div className=" text overflow-hidden text-[170px] inline-block w-0 line-clamp-1">
              Frontend
            </div>
            <div className="w-[1px] mt-2 relative line inline-block h-[180px] bg-neutral-500 origin-center" />
          </div>
          <div>
            <div className=" text overflow-hidden text-[200px] inline-block w-0 line-clamp-1 text-yellow-500">
              Developer
            </div>
            <div className="w-[1px] mt-2 relative line inline-block h-[210px] bg-neutral-500 origin-center" />
          </div>
        </div>
        <div className="flex flex-col justify-end items-end max-w-[500px] leading-7 text-right">
          <div
            className={`${idgrotesk.className} word  text-gray-300  font-medium text-md overflow-hidden`}
          >
            Hi! Welcome to my portfolio.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
