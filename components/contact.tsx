export default function Contact() {
  return (
   <div id="contact" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/contact_vid.mp4" type="video/mp4" />
      </video>

      {/* Optional overlay (for readability) */}
      <div className="absolute inset-0 bg-black/80"></div>

      <p className="md:text-[8rem] text-[5rem] text-center leading-none z-10 text-white">HAVE AN <br /> IDEA ?</p>
      <div className="wave-btn border-[#ddfa58] md:text-[6rem] text-[2rem] rounded-full border-2 z-10 mt-10 text-[#ddfa58] px-10  ">
        <a href="https://wa.me/918817358864?text=Hi%20Vivek%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
          target="_blank"
          rel="noopener noreferrer">
        <span className="leading-none">TELL US</span>
        </a>
      </div>
    </div>
  )
}