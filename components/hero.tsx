'use client';
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <>
            <motion.h1
                id="home"
                className="gradient-text md:h-60 z-10 md:z-0 h-30 w-full mt-2 md:mt-[6rem] px-12 flex items-center justify-center Outfit-Bold text-[3.6rem] md:text-[12.7rem] scale-y-124 uppercase"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Developer
            </motion.h1>
        </>
    );
}