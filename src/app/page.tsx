'use client'
import { relative } from "path";
import { use, useEffect, useRef , useState } from "react";
import ThreeJSScene from "@/components/threejsscene";
import Lenis from '@studio-freight/lenis'
import HorizontalScroll from "@/components/horizontalscroll";

export default function Home() {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play();

    const interval = setInterval(() => {
      if (!video) return;

      if (forward) {
        video.currentTime += 0.05;
        if (video.currentTime >= video.duration) setForward(false);
      } else {
        video.currentTime -= 0.05;
        if (video.currentTime <= 0) setForward(true);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [forward]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, 
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 3,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="w-full bg-[#d4d5d5] hide-scrollbar overflow-x-hidden">
      <section className="relative h-[100vh] w-full flex flex-col bg-cover justify-between px-14 py-20" style={{ backgroundImage: "url('/images/bkgimg.webp')" }}>
        <header className="w-full">
        <div className="h-9 w-10 flex justify-between gap-2">
          {
            [1, 2, 3].map((item) => (
              <div key={item} className={`h-full w-1/3 bg-[#707070] ${item===1 ? 'relative -top-4' : ''} `}>
                
              </div>
            ))
          }
        </div>

      </header>
      
      {/* hero section */}
      <div className="w-full flex flex-col justify-between items-center lg:gap-0 gap-5 ">
        {
          ["DEVELOPER","MVP-EXPERT" , "WEBDESIGNER" ,  "FRONT-END"].map((item , idx) => {
            return (
              <span key={idx} className="lg:text-[7.5rem] text-[2.5rem] leading-10 font-barlow font-bold lg:leading-25 text-[#979797]">{item}</span>
            )
          })
        }
      </div>

      <div className="sm:mt-8 w-full flex sm:justify-center justify-between items-center sm:gap-26 gap-4 opacity-50">
        <a href="https://www.linkedin.com/in/vivekgaindhar" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full overflow-hidden">
          <img className="w-full h-full bg-cover" src="/icons/linkedin.png" alt="" />
        </a>
        <a href="https://github.com/vivek-1314" target="_blank" rel="noopener noreferrer" className="h-9 w-9  rounded-full overflow-hidden">
          <img className="w-full h-full bg-cover scale-115" src="/icons/github.png" alt="" />
        </a>
        <a href="mailto:vivek1314gurjar@gmail.com" className="h-9 w-9 rounded-full overflow-hidden">
          <img className="w-full h-full bg-cover" src="/icons/email.png" alt="" />
        </a>
        <a href="https://in.docworkspace.com/d/sIOjkmfOGAZuyoMEG" className="h-9 w-9 rounded-full overflow-hidden">
          <img className="w-full h-full bg-cover" src="/icons/resume-icon.png" alt="" />
        </a>
      </div>
      </section>

      <section className="w-full h-[100vh] flex sm:flex-row flex-col justify-center  items-center gap-2 sm:px-14 px-2 py-2 sm:py-10">
        <div className="sm:w-1/2 w-full h-full flex flex-col justify-center sm:items-start items-center pt-8 sm:pl-14 gap-8  sm:gap-9">
          <section>
            <h2 className="text-4xl font-barlow-regular font-bold text-[#7D7D7D]"><span className="text-[#D4B156]">Crafting</span> Tomorrow’s</h2>
            <h2 className="text-4xl font-barlow-regular font-bold text-[#7D7D7D]">Digital <span className="text-[#D4B156]">Ecosystems</span></h2>
          </section>
          <section className="flex flex-col gap-4 px-2 sm:px-0">
            {
            ["Vivek — college Student, building what matters." ,"MVP & rapid model developer delivering fast, scalable solutions" , "Focused on authentic, meaningful digital experiences." ,
              "Full-stack developer blending backend and frontend smoothly." , "Always innovating beyond the usual tech limits."].map((item , idx) => {
                return (
                  <div className="flex" key={idx}>
                    <span className="text-lg text-[#7D7D7D] font-barlow-regular mr-2">-</span>
                    <p className="max-w-110 text-lg leading-6 text-justify text-[#7D7D7D] font-barlow-regular">{item}</p>
                  </div>
                )
              })
          }
          </section>
        </div>
        <div className="sm:w-1/2 w-full h-full overflow-hidden">
          <video  ref={videoRef} className="w-full h-full bg-cover" src="/videos/communication.webm" muted></video>
        </div>
      </section>

      <section>
        <HorizontalScroll />
      </section>

      <section className="w-full h-[50vh]  flex sm:flex-row flex-col gap-2 justify-center items-start p-4 my-8 sm:mb-0 mb-20">
          <div className="h-full w-14 pt-18">
            <div className="h-7 w-8 flex justify-between gap-2">
          {
            [1, 2, 3].map((item) => (
              <div key={item} className={`h-full w-1/3 bg-[#707070] ${item===1 ? 'relative -top-4' : ''} `}>
                
              </div>
            ))
          }
        </div>
          </div>
          <div className="h-full w-80  flex flex-col justify-end  pt-6">
            <h3 className="font-barlow-Extrabold font-bold text-[1.3rem] text-[#7D7D7D] text-lg capitalize">Let’s craft the future </h3>
            <h6 className="font-barlow-regular text-justify text-[1rem] text-[#7D7D7D]">This is more than code — it’s a reflection of thought, time, and belief.</h6>
            <p className="font-barlow-regular text-justify text-[1rem] text-[#7D7D7D]">Driven by curiosity, fueled by creativity, and built for impact.</p>
            <p className="font-barlow-regular text-justify text-[1rem] text-[#7D7D7D] mt-4">+91 8817358864</p>
            <p className="font-barlow-regular text-justify text-[1rem] text-[#7D7D7D]">Contact: vivek1314gurjar@gmail.com</p>
          </div>
          <div className="h-full w-80 flex flex-col justify-end items-end pt-6">
            <p className="font-barlow text-justify text-[2.4rem] leading-10 text-[#7D7D7D]">Think Fast.</p>
            <p className="font-barlow text-justify text-[2.4rem] leading-10 text-[#7D7D7D]">Ship <span className="text-[#D4B156] underline">Faster.</span></p>
          </div>
      </section>
    </main>
  )
}
