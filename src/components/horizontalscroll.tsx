import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const array = [
      {},
      {
      imgurl1: "/images/vynk1.png",
      imgurl2: "/images/vynk2.png",
      heading: "Vynk –",
      heading1: "Share Thoughts",
      heading2: "Not Resumes",
      text: "Vynk is an AI-powered real-time matching platform that connects people through their raw, unfiltered thoughts. Users type what’s on their mind and get instantly matched with someone resonating on a similar wavelength — all anonymously. Featuring AI-driven context matching, ambient fallback modes, vibe-controlled filters, and ephemeral chat layers, Vynk reimagines networking as co-creation.",
      techstack: ["Next.js","Typescript","Tailwind CSS","Node.js","Express.js","PostgreSQL","Firebase Auth","Jina-Ai API","Vercel","Railway"],
      link: "https://vynk-app-ebhg.vercel.app",
      githubrepo: "https://github.com/vivek-1314/vynk-app"
      },
      {
      imgurl1: "/images/nodex1.png",
      imgurl2: "/images/nodex2.png",
      heading: "NodeX -",
      heading1: "Real Connections.",
      heading2: "Real Opportunities.",
      text: "A smart networking platform that connects developers, founders, and creatives through AI-driven matching, real-time messaging, and personalized feeds. Built with the MERN stack, MeiliSearch, and Firebase for a seamless, modern experience.",
      techstack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "MeiliSearch", "Vercel", "Railway"],
      link: "https://nodex-1314.vercel.app",
      githubrepo: "https://github.com/vivek-1314/Nodex",
      },
      {
      imgurl1: "/images/ochi1.png",
      imgurl2: "/images/ochi2.png",
      heading: "Ochi –",
      heading1: "An frontend",
      heading2: "art piece",
      text: "One Ochi is a frontend-only artistic website that transforms scrolling into storytelling. Using Locomotive Scroll, Lenis, and GSAP, it creates a smooth, immersive flow where motion and design speak louder than words. It’s not just a site — it’s a sensory journey through rhythm, space, and emotion.",
      techstack: ["React.js", "Tailwind CSS", "Javascript", "Vercel", "Railway"],
      link: "https://ochi-nine-beta.vercel.app/",
      githubrepo: "https://github.com/vivek-1314/ochi"
      },
      {
      imgurl1: "/images/leetx1.png",
      imgurl2: "/images/leetx2.png",
      heading: "LeetX -",
      heading1: "Visualize",
      heading2: "Your LeetCode Grind",
      text: "Just enter your LeetCode username — LeetX breaks down your DSA journey into sleek charts. Track your progress by topic, see how many Easy/Medium questions you've crushed, and spot the gaps in your prep. No logins. Just insights.",
      techstack: ["Three.js", "html", "css", "javascript", "leetcode api"],
      link: "https://vivek-1314.github.io/leetx/",
      githubrepo: "https://github.com/vivek-1314/leetx"
      }
    ];

    useEffect(() => {
  const container = containerRef.current;
  const sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 0.3,
      end: () => "+=" + container!.offsetWidth,
      snap: {
        snapTo: 1 / (sections.length - 1), // divides scroll into panels
        duration: { min: 0.2, max: 0.5 },  // smooth jump duration
        ease: "power1.inOut",
        directional: true                 // ensures it snaps forward/back based on scroll direction
      }
    }
  });
}, []);


    return (
        <div ref={containerRef} className="flex h-screen w-[500vw]  bg-[#d4d5d5] hide-scrollbar">
            {array.map((item, index) => {
              if (index === 0) {
                return (
                  <div key={index} className="panel w-screen h-screen flex sm:flex-row flex-col gap-6">
                    <div className="sm:w-1/2 w-full sm:h-full h-1/2  sm:py-10">
                      <img src="/images/rocket.webp" className="h-full w-full overflow-hidden ml-20" alt="" />
                    </div>
                    <div className="sm:w-1/2 w-full flex flex-col justify-center sm:items-start items-center gap-6 pl-4 sm:pl-20">
                    <h3 className="text-3xl text-[#D4B156] font-barlow">Projects 🚀</h3>
                    <p className="text-lg font-barlow-thin text-justify text-[#7D7D7D] max-w-100">Here are some of my past creations — real tools that made an impact, crafted with purpose and passion. Each project, from Vynk to NodeX, Ochi, and LeetX, tells a story of ideas turned into meaningful solutions.</p>
                    </div>
                  </div>
                );
              }
                return(<div key={index} className="panel bg-[#d4d5d5] h-screen flex sm:flex-row flex-col justify-start gap-4 w-screen text-4xl font-bold sm:px-0 px-2 py-2  sm:py-12">
                    <div className=" sm:w-1/2 w-full sm:h-full flex flex-col justify-center items-center gap-1">
                        <img className="w-100 rounded-t-md rounded-l-md aspect-auto border-2 border-[#a09d9d]" src={item.imgurl1} alt="" />
                        <img className="w-100 hidden sm:block rounded-b-md rounded-l-md aspect-auto border-2 border-[#a09d9d]" src={item.imgurl2} alt="" />
                    </div>
                    <div className="sm:w-1/2 w-full sm:h-full flex-grow flex flex-col justify-start sm:justify-center items-center sm:items-start sm:gap-8 gap-10 px-2 sm:px-12 ">
                        <section className="flex flex-col gap-4"><h2 className="text-2xl font-barlow-regular text-[#7D7D7D]">{item.heading} <span className="text-[#D4B156]">{item.heading1}</span> <span>{item.heading2}</span></h2>
                        <p className="text-lg leading-5 font-barlow-thin text-gray-500 text-justify max-w-110">{item.text}</p>
                        <div className="text-sm  font-barlow-thin flex flex-wrap gap-2 max-w-110 text-[#363434] ">{
                          (item.techstack)?.map((val,index) => {
                            return (
                              <span key={index} className="text-sm border-1 px-3 rounded-xl py-[0.1rem] font-barlow-thin text-[#363434] max-w-110">{val}</span>
                            )
                          })
                          }</div></section>
                        <div className="flex gap-4">
                            <a href={item.link} className="text-[#3A59D1] underline font-barlow-thin text-lg">Live Demo</a>
                            <a href={item.githubrepo} className="text-[#3A59D1] underline font-barlow-thin text-lg">GitHub Repo</a>
                        </div>
                    </div>
                </div>);
  })}
        </div>
    )

}