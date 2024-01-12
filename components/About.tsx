"use client";

import React, { useRef } from "react";
import { idgrotesk, millwon } from "./fonts";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(".about-text", {
        height: "auto",
        rotate: 0,
        duration: 0.5,
        ease: "circ.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "center 10%",
          scrub: 2,
        },
      });
    },
    { scope: aboutRef }
  );
  return (
    <div
      className="flex fw-full p-10 my-2 min-h-screen justify-center items-center"
      ref={aboutRef}
    >
      <div className=" ml-auto text-right">
        <div className={` overflow-hidden ${millwon.className}`}>
          <div
            style={{ transform: "rotate(-2deg)" }}
            className="about-text  origin-right h-0 text-8xl  font-black uppercase text-neutral-300 leading-snug "
          >
            frontend developer based in Chisinau Moldova
          </div>
        </div>
        <div className={`${idgrotesk.className} overflow-hidden`}>
          <p
            style={{ transform: "rotate(2deg)" }}
            className="about-text origin-left overflow-hidden h-0 text-md mt-10 leading-8 text-neutral-400"
          >
            I&apos;m Stefan, a passionate 24-year-old frontend developer hailing
            from the picturesque landscapes of Moldova. I thrive on transforming
            creative visions into immersive digital experiences through the art
            of coding.
          </p>
        </div>
        <div className={`${idgrotesk.className} overflow-hidden`}>
          <p
            style={{ transform: "rotate(-2deg)" }}
            className="about-text origin-right overflow-hidden h-0 text-md mt-10 leading-8 text-neutral-400"
          >
            Beyond the lines of code, I&apos;m driven by a desire to make a
            positive impact. Whether I&apos;m optimizing user experiences or
            collaborating with creative minds, I approach each project with
            enthusiasm and dedication. Let&apos;s embark on a journey of
            innovation together, where design meets functionality, and ideas
            come to life in the digital realm. Welcome to my world of frontend
            development – where creativity meets code!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
