'use client'

import { useScroll } from "framer-motion";
import { useState } from "react";
import SideBar from "./ui/sideBar";

const contacts = [
  {
    img: "github.png",
    link: "https://github.com/vivek-1314",
  },
  {
    img: "linkedin.png",
    link: "https://www.linkedin.com/in/vivekgaindhar/",
  },
  {
    img: "twitter.png",
    link: "https://x.com/vivek859988110",
  },
];

export default function Header() {

    return (
        <header className="w-full z-20 flex items-center justify-between mt-6 Outfit-Regular text-md px-2 md:px-12">

            <SideBar />

            <nav className="hidden md:flex gap-10">
                {
                    ["Home", "Services", "Contact"].map((item, idx) =>{
                        return (
                            <a key={idx} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-gray-900">{item}</a>
                        )
                    })
                }
            </nav>

            <div className="flex gap-4 items-center">
                <div className="gap-4 hidden md:flex">
                    {
                        contacts.map((items, idx) => {
                        return (
                            <div key={idx} className={`h-8 w-8  rounded-full bg-white ${idx === 2 ? 'p-[0.5rem]' : 'p-[0.4rem]'}`}>
                                <a href={items.link} className="text-gray-700 hover:text-gray-900">
                                    <img key={idx} src={`/icons/${items.img}`} alt="" className="h-full w-full"/>
                                </a>
                            </div>
                            )
                        })
                    }
                </div>

                <a
                  href="https://wa.me/918817358864?text=Hi%20Vivek%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-28 h-9 bg-black rounded-full text-white flex items-center justify-center"
                >
                  Let’s Go !
                </a>
            </div>
        </header>
    );
}