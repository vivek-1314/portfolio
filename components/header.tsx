'use client'

import { useScroll } from "framer-motion";
import { useState } from "react";
import SideBar from "./ui/sideBar";

const contacts = ['github.png', 'linkedin.png', 'twitter.png']

export default function Header() {

    return (
        <header className="w-full z-10 flex items-center justify-between mt-6 Outfit-Regular text-md px-2 md:px-12">

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
                                <a className="text-gray-700 hover:text-gray-900">
                                    <img key={idx} src={`/icons/${items}`} alt="" className="h-full w-full"/>
                                </a>
                            </div>
                            )
                        })
                    }
                </div>

                <div className="w-28 h-9 bg-black rounded-full text-white flex items-center justify-center">Let’s Go !</div>
            </div>
        </header>
    );
}