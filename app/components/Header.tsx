"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "./Nav"; // Ensure this is correctly imported

const Header: React.FC = () => {
  return (
    <motion.header
      className="shadow-md w-full fixed top-0 z-50"
      initial={{ opacity: 0, y: -10 }} // Start slightly above with opacity 0
      animate={{ opacity: 1, y: 0 }} // Move to original position with full opacity
      exit={{ opacity: 0, y: -10 }} // Move back up and fade out when exiting
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }} // Smooth transition
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-5">
        <div className="text-2xl font-bold text-white">
          <Link href="/">JOEL ILETI</Link>
        </div>
        <Nav />
      </div>
    </motion.header>
  );
};

export default Header;
