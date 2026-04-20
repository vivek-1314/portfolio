import Image from "next/image";
import Header from "../components/header";
import Hero from "../components/hero"
import Banner from "../components/banner";
import Services from "@/components/services";

export default function Home() {
  return (
      <main className="bg-[#c5ccd7] w-screen flex flex-col">
          <section className="md:h-screen h-[90vh] flex flex-col ">
            <Header />
            <Hero />
            <Banner />
            <div className="absolute gradient-bg h-[80vh] md:w-110 w-screen rounded-t-full top-50 left-1/2 transform -translate-x-1/2 ">
                <img className="w-100 aspect-auto absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] [--webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]" src="images/img.png" alt="" />
            </div>
          </section>

          <section className="h-[200vh] w-full flex md:px-12 px-4">
            <Services />
          </section>
      </main>
  );
}
