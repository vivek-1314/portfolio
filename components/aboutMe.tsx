'use client'
import FloatingTechStack from "./ui/floatingDiv";
import { motion } from "framer-motion";

const data = [
  "B.Tech CSE undergrad & Full-Stack Developer",
  "building scalable web apps, backends,",
  "and agentic AI systems",
]

const bigdata = [
  "Full-Stack Developer building",
  "scalable web apps",
  "& agentic AI systems",
]


export default function AboutMe() {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-start gap-4 md:px-12 px-4">
        <span className="px-4 py-1 bg-white font-[inter-bold] uppercase rounded-full text-[0.7rem] ">About me</span>

        <section className="flex z-10 flex-col font-[anton-reg] uppercase gap-4 items-center justify-center">
            
            {/* Small screen - data */}
            {bigdata.map((item, index) => (
                <span key={index} className="block md:hidden text-[1.6rem] scale-x-110 leading-[1.1rem] text-[#010302]">
                {item}
                </span>
            ))}

            {/* Big screen - bigdata */}
            {data.map((item, index) => (
                <span key={index} className="hidden md:block text-[2.8rem] scale-x-110 leading-none text-[#010302]">
                {item}
                </span>
            ))}

        </section>

        <div className="md:relative md:h-140 h-60 mt-10 w-full md:flex md:flex-col flex-row">
            <div className="h-1/2 w-full flex md:border-b-0 border-b-2" >
                <section className="w-1/2 h-full md:border-b-2 font-[inter-bold] leading-none flex flex-col items-start justify-center">
                    <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[4rem] ">02</motion.span>
                    <span className="Outfit-Light">Years of Experience</span>
                </section>    
                <section className="w-1/2 h-full ">
                </section>
            </div>
            <div className="h-1/2 w-full flex ">
                <section className="w-1/2 h-full  font-[inter-bold] leading-none flex flex-col items-start justify-center">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[4rem] ">15+</motion.span>
                    <span className=" Outfit-Light">Total Projects</span>
                </section>    
                <section className="w-1/2 h-full "></section>
            </div>

            <div className="absolute md:top-1/2 opacity-20 md:opacity-100  transform md:-translate-y-1/2 md:h-[80%] md:w-1/2 w-full h-[50%] md:right-0 left-1/2 md:-translate-x-0 -translate-x-1/2  top-40">
                 <FloatingTechStack />
            </div>

            <div className="absolute md:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 md:h-80 md:w-80 h-30 w-80 rounded-full bg-[#f1e0c4] z-10">
                <a href="/vivek_resume.pdf" download>
                        <span className="md:text-[0.7em] text-[0.5rem] font-bold uppercase Outfit-Light text-text text-center absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">download my <br /> cv</span>
                        <motion.div
                        className="absolute cursor-pointer group md:h-30 md:w-30 h-18 w-18 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,       // control speed (lower = faster)
                            ease: "linear"     // IMPORTANT → constant speed
                        }}
                        >
                        <div className="h-full w-full rounded-[0.4rem] bg-[#ddfa58] group-hover:bg-[#bed742] absolute"></div>
                        <div className="h-full w-full rounded-[0.4rem] bg-[#ddfa58] group-hover:bg-[#bed742] rotate-[30deg] absolute"></div>
                        <div className="h-full w-full rounded-[0.4rem] bg-[#ddfa58] group-hover:bg-[#bed742] absolute rotate-[60deg]"></div>
                        <div className="h-full w-full rounded-[0.4rem] bg-[#ddfa58] group-hover:bg-[#bed742] absolute rotate-[90deg]"></div>
                        <div className="h-full w-full rounded-[0.4rem] bg-[#ddfa58] group-hover:bg-[#bed742] absolute rotate-[120deg]"></div>
                        </motion.div>
                        <img src="images/arrow.png" className="absolute md:w-7 md:h-7 h-5 w-5 transform left-1/2 -translate-x-1/2 md:top-[11.5rem] top-[4.7rem] rotate-90" alt="" />
                </a>
            </div>
        </div>
    </div>
  );
}
