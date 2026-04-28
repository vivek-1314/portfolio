export default function Experience() {
    return (
        <div className="w-full md:px-12 px-4 mt-14 md:mb-0 mb-20">
            <section className="flex gap-1">
                <div className="md:h-10 h-8 w-[0.3rem] bg-[#fc340c]"></div>
                <span className="md:text-[2.6rem] text-[2rem] Outfit-SemiBold leading-none md:text-md pl-1">Experience</span>
            </section>

            <hr className="md:mt-10 mt-6 border-t-[0.1rem]" />

            <section className="flex items-center justify-between mt-6 md:mt-10">
                <p className="md:text-[1.1rem] text-[0.9rem] Outfit-Regular max-w-[50rem]">Interned as a Backend Engineering intern at Sync & Explore, where I designed and developed REST APIs for both admin and user-side systems — handling authentication, role-based access, and core business logic in a production environment.</p>
                <img className="w-20 h-20 md:block hidden rounded-full" src="images/image.png" alt="" />
            </section>

            <section className=" Outfit-Light md:text-[0.8rem] text-[0.7rem] h-10 w-full md:mt-8 mt-4 flex items-center gap-8">
                <span>Sept 2025 - Oct 2025</span>
                <span className="ml-auto underline text-[#0000EE]">
                <a
                    href="https://drive.google.com/file/d/1O_Pyl-QyTxw22JfJKsaT0tDooyjAPL-1/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Certificate
                </a>
                </span>

                <span className="text-[#0000EE] underline">
                <a
                    href="https://drive.google.com/file/d/1gkzQiMqxidNhzhQkCpyJpuAegouezG29/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LOR
                </a>
                </span>

                <span className="text-[#0000EE] underline">
                <a
                    href="https://www.linkedin.com/company/sync-explore"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                </span>
            </section>
        </div>
    );
}