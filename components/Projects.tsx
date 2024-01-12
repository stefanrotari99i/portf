"use client";

import React, { useRef, useState } from "react";

import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { idgrotesk } from "./fonts";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  const projectsRef = useRef(null);

  useGSAP(() => {
    gsap.to(".line", {
      flex: 1,
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 70%",
        end: "top 0-=20%",
        scrub: 2,
      },
    });
  });

  return (
    <section
      className="flex flex-col w-full p-10 my-2 relative"
      ref={projectsRef}
    >
      <div className="flex items-center justify-center w-full gap-4 -skew-x-6">
        <h2 className="text-9xl font-black uppercase text-neutral-300 leading-snug">
          Recent
        </h2>
        <div className="h-8 bg-neutral-800 relative flex-0 line" />
        <h2 className="text-9xl font-black uppercase text-neutral-300 leading-snug">
          Projects
        </h2>
      </div>
      <div className="flex flex-col justify-start gap-10 items-end w-full">
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

const Project = () => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        scale: 1.1,
        objectPosition: "100% 5%",
        ease: "expoScale",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "center 30%",
          scrub: 2,
        },
      });
      gsap.to(textRef.current, {
        y: -90,
        ease: "expoScale",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "center 0-=20%",
          scrub: 2,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <article
      className={`flex flex-col w-full ${idgrotesk.className}`}
      ref={containerRef}
    >
      <div className=" h-[300px] w-full overflow-hidden relative img-wrapper origin-center skew-x-6">
        <Image
          alt="project"
          src={"/bg.jpeg"}
          ref={imageRef}
          fill
          className="object-cover grayscale object-top"
        />
      </div>
      <div
        className="w-full flex items-center justify-between px-8"
        ref={textRef}
      >
        <span className="text-9xl font-black uppercase text-stroke ">01.</span>
        <div>
          <h3 className="text-7xl tracking-wide text-right font-black uppercase text-neutral-100 leading-snug line-clamp-1 cursor-pointer">
            Project Name
          </h3>
          <p className="text-sm tracking-wide text-right font-medium uppercase text-neutral-500 leading-snug line-clamp-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            porro?
          </p>
        </div>
      </div>
      <div className="w-full bg-neutral-700 h-[1px] mt-4" />
    </article>
  );
};

export default Projects;
