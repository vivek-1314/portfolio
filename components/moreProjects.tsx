'use client' ;

import gsap from "gsap";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { a } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);

export default function MoreProjects() { 

   const boxRefs  = useRef<(HTMLElement | null)[]>([]);
   const containerRef  = useRef(null);

   const items = [
       { src: "videos/vid.mp4", url: "https://threejswebsite-sage.vercel.app/" },
       { src: "videos/vid2.mp4", url: "https://vynk-app.vercel.app/" }
   ];

   useGSAP(() => {

        const isMdUp = window.matchMedia("(min-width: 768px)").matches;
        if (!isMdUp) return; // ❌ skip GSAP on small screens

        boxRefs.current.forEach((box) => {
                gsap.fromTo(box,
                { width: "45rem" },
                {
                    width: "100%",
                    scrollTrigger: {
                    trigger: box,
                    start: "top 50%",
                    end: "top 5%",
                    scrub: true,
                    },
                }
                );
        });
        
        }, { scope: containerRef });
    
    return (
        <div className="bg-[#131313] pb-30 px-4 w-full md:mt-30 md:px-12 flex flex-col">
            <section className="flex gap-1 mt-10">
                <div className="md:h-10 h-8 w-[0.3rem] bg-[#fc340c]"></div>
                <span className="md:text-[2.6rem] text-white text-[2rem] Outfit-SemiBold leading-none md:text-md pl-1">
                    More Projects
                </span>
            </section>

                <section ref={containerRef}  className="cursor-pointer md:my-15 md:mx-20 px-4 flex-1 flex items-center justify-center flex-col">
                    {items.map((item, i) => (
                        <a key={i} href={item.url} ref={(el) => { if (el) boxRefs.current[i] = el; }} target="_blank" rel="noopener noreferrer">
                        <div
                        className={`w-full relative bg-[#000000] md:h-[25rem] overflow-hidden mt-10 rounded-full`}
                        >   
                            <video
                                    className="w-full opacity-70 scale-104 z-20"
                                    src={item.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                        </div>
                        </a>
                    ))}
                </section>  
        </div>
    );
}