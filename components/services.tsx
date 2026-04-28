'use client';

import { useState } from "react";
import { Imprima } from "next/font/google";
import ServiceCmp from "./ui/serviceCmp";
import { motion } from "framer-motion";

const services = [
    {
        title: "Multi-agent AI Systems",
        description: "Craft clean agentic workflows, and highly optimized systems using LangGraph, LangSmith, and custom agent architectures for complex problem-solving."
    },
    {
        title: "Full-Stack Development",
        description: "Build scalable and production-ready web applications using modern stacks like React, Next.js, Node.js, and MongoDB."
    },
    {
        title: "AI-Powered Systems",
        description: "Integrate LLMs, NLP, and intelligent models into real-world products for automation, personalization, and smart interactions."
    },
    {
        title: "Backend & API Engineering",
        description: "Design robust, secure, and scalable backend systems with efficient APIs, authentication, and real-time capabilities."
    }
];

export default function Services() {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div id="services" className="w-full md:mt-40 mt-20 flex md:gap-20 gap-10 flex-col">
            <section className="w-full flex items-end justify-between">
                <motion.span
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}

                className="md:text-[8.2rem] text-[3rem] font-[inter-extrabold] leading-28 gradient-text scale-y-105 uppercase">service</motion.span>
                <section className="flex gap-2 items-end">
                    <span className="md:text-[1.2rem] text-[0.9rem] font-[inter-bold]">Services </span>
                    <div className="md:h-7 h-5 w-1 bg-[#f65f15]"></div>
                </section>
            </section>

            <section className="flex flex-col md:gap-8 gap-4">
                    {services.map((item, index) => (
                        <ServiceCmp
                        key={index}
                        heading={item.title}
                        description={item.description}
                        isOpen={openIndex === index}
                        onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                        }
                        />
                    ))}
            </section>
        </div>
    );
}