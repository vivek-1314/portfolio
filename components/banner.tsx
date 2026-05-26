import ZigZagCircle from "./circle"

export default function Banner() {
    return (
        <div className="md:mt-14 h-[rem] flex-1 z-10 w-full flex md:flex-row flex-col md:items-end mb-6 items-start justify-end md:px-12 px-3 ">
            <div className="md:h-full h-1/2 md:w-1/2 w-full flex flex-col md:items-start md:justify-end items-start md:gap-4 font-[inter-bold]">
                    <span className="text-[3vw] text-[#121212] pl-1 md:text-[1.5vw]">Hi 👋, I'm <span>Vivek Gaindhar</span></span>
                    <h2 className="md:text-[4.7vw] text-[5vw] text-[#353839] font-[inter-extrabold] leading-[4vw] md:leading-[3.7vw] mt-2 text-left uppercase ">Multi-Agent <br /> Work-flows <br /> & Systems .</h2>
            </div>
            <div className="flex flex-col items-end md:h-[14vw]  md:w-1/2 w-full">
                <div className="bg-white text-[#28282B] h-full md:w-[35vw] w-full rounded-[0.8rem] md:text-[1.4vw] text-[1.1rem] tracking-wide p-6 Outfit-Regular flex flex-col items-start md:gap-0 gap-10 justify-between">
                    <p>2+ years of experience building scalable web applications and full-stack systems.</p>
                    <span className="text-[0.7rem] underline underline-offset-6 decoration-1 italic font-[inter-regular]">vivek1314gurjar@gmail.com</span>
                </div>
            </div>
        </div>
    );
}