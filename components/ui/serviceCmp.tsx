'use client';

import { motion } from "framer-motion";

type ServiceCmpProps = {
  heading: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function ServiceCmp({
  heading,
  description,
  isOpen,
  onClick
}: ServiceCmpProps) {

  const cardVariants = {
    initial: { height: 140 },
    hover: { height: 288 }
  };

  const descVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0 }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 45 }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate={isOpen ? "hover" : "initial"}
      whileHover={!isOpen ? "hover" : undefined}
      onPointerDown={onClick}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="w-full bg-[#fffefe] font-[mont-bold] rounded-[1.1rem] flex flex-col gap-6 md:px-12 px-4 py-11 overflow-hidden cursor-pointer shadow-md"
    >
      
      <section className="flex justify-between w-full items-center">
        <h3 className="md:text-[2.6rem] text-[1.6rem] uppercase md:-tracking-[0.12rem] tracking-tighter text-[#151515] leading-none">
          {heading}
        </h3>

        <motion.img
          src="icons/plus.png"
          className="h-8 w-8"
          variants={iconVariants}
        />
      </section>

      <motion.p
        variants={descVariants}
        className="text-[#151515] max-w-[65vw] md:text-[1.3rem] text-[0.9rem] mt-6 font-[mont-med]"
      >
        {description}
      </motion.p>

    </motion.div>
  );
}