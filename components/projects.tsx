export default function Projects() {    
    return (
        <div className="md:px-12 px-4 w-full pb-10 flex flex-col items-center justify-start">
            <h1 className="gradient-text z-10 md:z-0 h-40 w-full mt-2 leading-none px-12 flex items-center justify-center Outfit-Bold text-[3.6rem] md:text-[7rem]  uppercase">
                Latest Portfolio
            </h1>

            <section className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-3 -mt-8 z-10 justify-items-center">
                <div className="bg-[#6424cd] md:w-[25rem] md:h-[25rem] w-[20rem] h-[20rem] overflow-hidden rounded-lg shadow-md">
                    <img src="/images/Mockup.png" className="w-full h-full" alt="" />
                </div>
                <div className="bg-[#6424cd] md:w-[25rem] md:h-[25rem] w-[20rem] h-[20rem] overflow-hidden rounded-lg shadow-md">
                    <img src="/images/Mockup3.png" className="w-full h-full" alt="" />
                </div>
                <div className="bg-[#6424cd] md:w-[25rem] md:h-[25rem] w-[20rem] h-[20rem] overflow-hidden rounded-lg shadow-md">
                    <img src="/images/Mockup2.png" className="w-full h-full" alt="" />
                </div>
                <div className="bg-[#6424cd] md:w-[25rem] md:h-[25rem] w-[20rem] h-[20rem] overflow-hidden rounded-lg shadow-md">
                    <img src="/images/Mockup4.png" className="w-full h-full" alt="" />
                </div>
            </section>
        </div>
    );
}