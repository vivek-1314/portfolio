import Image from "next/image";
import Header from "../components/header";
import Hero from "../components/hero"
import Banner from "../components/banner";
import Services from "@/components/services";
import AboutMe from "@/components/aboutMe";
import Projects from "@/components/projects";
import Experience from "@/components/exper";
import MoreProjects from "@/components/moreProjects";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="bg-[#c5ccd7] w-screen flex flex-col">
        
        <section className="md:h-screen h-screen flex flex-col">
          <Header />
          <Hero />
          <Banner />
          
          <div className="absolute gradient-bg h-[80vh] md:w-110 w-screen rounded-t-full top-50 left-1/2 transform -translate-x-1/2">
            <img 
              className="w-100 aspect-auto absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_70%,transparent_10  0%)]"
              src="images/img22.png" 
              alt=""
            />
          </div>
        </section>

        <section className="md:h-[190vh] h-[150vh] w-full flex flex-col md:px-12 px-4">
          <Services />
        </section>

        <section className="md:h-[115vh] h-[90vh] w-full flex flex-col md:px-12 px-4">
          <AboutMe />
        </section>

        <Projects />
        <Experience />
        <MoreProjects />

        <Contact />

        <Footer />  

      </main>
    </SmoothScrollProvider>
  );
}