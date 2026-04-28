'use client'

import {motion} from "framer-motion";
import { url } from "inspector";


const data = [
  {
    title: "Ui Design",
    description:
      "A pure UI art piece — crafted to push the boundaries of motion design with animation-heavy layouts and immersive visual storytelling.",
    image: "/images/Mockup.png",
    url: "https://ochi-nine-beta.vercel.app/"
  },
  {
    title: "product Website",
    description:
      "Orion's waitlist landing page — built for a seamless, premium experience where users explore product details while securing their spot.",
    image: "/images/Mockup3.png",
    url: "https://orion-website-one.vercel.app/"
  },
  {
    title: "Nodex",
    description:
      "A full-stack networking app where professionals share ideas as nodes, build connections, and discover profiles through smart search.",
    image: "/images/Mockup7.png",
    url: "https://nodex-1314.vercel.app"
  },
  {
    title: "multi agent system",
    description:
      "An orchestrated AI pipeline where multiple specialized agents collaborate, delegate tasks, and deliver intelligent end-to-end automation to design a frontend only website from prompt.",
    image: "/images/Mockup6.png",
    url: "https://frontend-gen-agent-wzig.vercel.app/"
  },
];

export default function Projects() {    
    return (
        <div className="md:px-12 px-4 w-full pb-10 flex flex-col items-center justify-start">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.8, ease: "easeOut" }} className="gradient-text z-10 md:z-0 h-40 w-full mt-2 leading-none px-12 flex items-center justify-center Outfit-Bold text-[3.6rem] md:text-[7rem]  uppercase">
                Latest Portfolio
            </motion.h1>

            <section className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-3 -mt-8 z-10 justify-items-center">
                {
                    data.map((item, index) => (
                    <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                    <div
                        className="md:w-[25rem] md:h-[25rem] w-[20rem] h-[20rem] overflow-hidden rounded-lg shadow-md bg-cover bg-center bg-no-repeat flex flex-col-reverse p-4 relative group"
                        style={{ backgroundImage: `url(${item.image})` }}
                        >
                        {/* Blur + dark overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 backdrop-blur-none group-hover:bg-black/50 group-hover:backdrop-blur-[0.1rem] transition-all duration-400 rounded-lg" />

                        {/* Description — fades in on hover */}
                        <p className="absolute inset-0 flex items-start p-4 justify-center text-start max-w-[18rem] Outfit-Light text-white text-sm font-medium px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 leading-relaxed">
                            {item.description}
                        </p>

                        {/* Bottom pill + arrow — fades out on hover */}
                        <section className="flex gap-2 relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                            <div
                            className={`w-40 h-10 ${index === 3 ? "bg-[#010100]" : "bg-white"} rounded-full font-[inter-bold] text-sm flex items-center justify-center capitalize`}
                            >
                            <span className={`${index === 3 ? "text-white" : "text-black"}`}>
                                {item.title}
                            </span>
                            </div>
                            <div
                            className={`w-10 h-10 ${index === 3 ? "bg-[#010100] px-2" : "bg-white px-3"} rounded-full flex items-center justify-center`}
                            >
                            <img
                                src={index === 3 ? "/images/arrow.png" : "/images/right-arrow.png"}
                                className="-rotate-40 hover:rotate-0 transition-all duration-300"
                                alt=""
                            />
                            </div>
                        </section>
                    </div>
                    </a>
                    ))
                }
            </section>
        </div>
    );
}