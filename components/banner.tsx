import ZigZagCircle from "./circle"

export default function Banner() {
    return (
        <div className="md:mt-14 flex-1 z-10 w-full flex md:flex-row flex-col md:items-center items-start justify-between md:px-12 px-6">
            <div className="md:h-full h-1/2 md:w-1/2 w-full flex flex-col md:items-start md:justify-center items-start md:gap-4 font-[inter-bold]">
                    <span className="text-[0.9rem] md:test-md pl-1">Hi 👋, I'm <span>Vivek Gaindhar</span></span>
                    <h2 className="md:text-[3.2rem] pl-3 text-[1.8rem] text-[#010200] font-[inter-extrabold] md:leading-[2.8rem] leading-[1.6rem] mt-2 text-left uppercase scale-x-115 ">Multi-Agent <br /> Work-flows <br /> & Systems .</h2>
            </div>
            <div className="flex flex-col items-end md:h-[80%] md:w-1/2 w-full">
                <div className="bg-white h-full md:w-100 w-full rounded-[0.8rem] md:text-[1.3rem] text-[1.1rem] tracking-wide p-6 Outfit-Regular flex flex-col items-start md:gap-0 gap-10 justify-between">
                    <p>2+ years of experience building scalable web applications and full-stack systems.</p>
                    <span className="text-[0.7rem] underline underline-offset-6 decoration-1 italic font-[inter-regular]">vivek1314gurjar@gmail.com</span>
                </div>
            </div>
        </div>
    );
}