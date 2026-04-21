
const data = [{
    title: "Ui Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/Mockup.png",
},
{
    title: "product Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/Mockup3.png",
} 
,
{    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/Mockup2.png",
},
{
    title: "Leetx",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/Mockup4.png",
}
]

export default function Projects() {    
    return (
        <div className="md:px-12 px-4 w-full pb-10 flex flex-col items-center justify-start">
            <h1 className="gradient-text z-10 md:z-0 h-40 w-full mt-2 leading-none px-12 flex items-center justify-center Outfit-Bold text-[3.6rem] md:text-[7rem]  uppercase">
                Latest Portfolio
            </h1>

            <section className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-3 -mt-8 z-10 justify-items-center">
                {
                    data.map((item, index) => (
                        <div className="md:w-[25rem] md:h-[25rem] w-[20rem] h-[20rem] overflow-hidden rounded-lg shadow-md  bg-cover bg-center bg-no-repeat flex flex-col-reverse p-4"
                        style={{ backgroundImage: `url(${item.image})` }}>
                            <section className="flex gap-2">
                                <div className={`w-40 h-10 ${index == 3 ? "bg-[#010100]" : "bg-white"} rounded-full font-[inter-bold] text-sm flex items-center justify-center capitalize`}>
                                    <span className={`${index==3 ? "text-white" : "text-black"}`}>{item.title}</span>
                                </div>
                                <div className={`w-10 h-10 ${index == 3 ? "bg-[#010100] px-2" : "bg-white px-3"} rounded-full flex items-center justify-center`}>
                                    <img src={index == 3 ? "/images/arrow.png" : "/images/right-arrow.png"} className="-rotate-40 hover:rotate-0 transition-all duration-300 " alt="" />
                                </div>
                            </section>
                        </div>
                    ))
                }
            </section>
        </div>
    );
}