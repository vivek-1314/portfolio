import FloatingTechStack from "./ui/floatingDiv";

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
    <div className=" h-full bg-red-300 w-full flex flex-col items-center justify-start gap-4 md:px-12 px-4">
        <span className="px-4 py-1 bg-white font-[inter-bold] uppercase rounded-full text-[0.7rem] ">About me</span>

        <section className="flex flex-col font-[anton-reg] uppercase gap-4 items-center justify-center">
            
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

        <div className="relative md:h-140 h-60 mt-10 w-full md:flex md:flex-col flex-row">
            <div className="h-1/2 w-full flex md:border-b-0 border-b-2" >
                <section className="w-1/2 h-full md:border-b-2 font-[inter-bold] leading-none flex flex-col items-start justify-center">
                    <span className="text-[4rem] ">02</span>
                    <span className="Outfit-Light">Years of Experience</span>
                </section>    
                <section className="w-1/2 h-full ">
                </section>
            </div>
            <div className="h-1/2 w-full flex ">
                <section className="w-1/2 h-full  font-[inter-bold] leading-none flex flex-col items-start justify-center">
                    <span className="text-[4rem] ">15+</span>
                    <span className=" Outfit-Light">Total Projects</span>
                </section>    
                <section className="w-1/2 h-full "></section>
            </div>

            <div className="absolute top-1/2 transform -translate-y-1/2 h-[80%] w-1/2 right-0">
                 <FloatingTechStack />
            </div>

            <div className="absolute -bottom-35 md:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 md:h-80 md:w-80 h-30 w-80 rounded-full bg-[#fe956f] z-10"></div>
        </div>

    </div>
  );
}
