import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end:'+=800 center',
                scrub:0.5,
                pin: true,
                pinSpacing: true,                
            }
        })

        clipAnimation.to(".mask-clip-path", {
            width:'100vw',
            height:'100vh',
            borderRadius:0,
        })
    });
  return (
    <>
      <div id="about" className="min-h-screen w-screen text-red-700">
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-4 bg-white">
          <h2 className="font-general uppercase md:text-[2rem]">
            Welcome to Zentry
          </h2>
          <AnimatedTitle title="Disc<b>o</b>ver the World's <br /> l<b>a</b>rgest Shared Adventure" containerClass="mt-5 !text-black text-center"  />

          <div className="about-subtext">
            <p>The Game of Games begins—your life, now an epic MMORPG</p>
            <p >
              Zentry unites every player from countless games and platforms,
              both digital and physical, into a unified Play Economy
            </p>
          </div>
        </div>

        <div id="clip" className="h-dvh w-screen">
            <div className="mask-clip-path about-image">
                <img src="img/about.webp" alt="background"
                className="absolute left-0 top-0 size-full object-cover"
                />
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
