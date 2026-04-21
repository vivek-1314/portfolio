"use client";

import { useState } from "react";
import Link from "next/link";

const header_buttons = [
  { title: "Home", link: "/" },
  { title: "Product", link: "/Orion" },
  { title: "Pricing", link: "/pricing" },
  { title: "Community", link: "/community" }
];

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative z-20">
      
      {/* Toggle Button */}
      <button
        className="h-10 w-10 bg-gray-200 rounded-lg flex items-center justify-center shadow-2xl"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`z-20 absolute top-0 -left-10 w-50 bg-white shadow-2xl rounded-xl p-4 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-10" : "-translate-x-full"}`}
      >
        {/* Close */}
        <img
          src="/images/back.png"
          onClick={() => setIsOpen(false)}
          className="w-6 h-6 mb-4 cursor-pointer"
        />

        <h3 className="bg-black text-white px-4 py-2 rounded-xl mb-4">
          Control panel
        </h3>

        {header_buttons.map((val, index) => (
          <Link
            key={index}
            href={val.link}
            className="block py-3 border-b text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            {val.title}
          </Link>
        ))}
      </div>
    </div>
  );
}