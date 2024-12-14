"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import { fadeIn } from "./variant";
//import ParticlesContainer from "./components/ParticlesContainer";
import Avatar from "./components/Avatar";
import TransitionWrapper from "./components/TransitionWrapper";
import Transition from "./components/Transition";

export default function Home() {
  return (
    <TransitionWrapper>
      <Transition />
      <div className="bg-primary/60 h-full">
        {/* text */}
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              <div className="text-left">
                <p className="text-2xl font-poppins text-gray-900 dark:text-white">
                  Hello! I'm Joel
                  <br />
                  <span className="text-[#F13024]">
                    <Typewriter
                      words={["Software Engineer", "Web Developer"]}
                      loop={Infinity}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={2000}
                    />
                  </span>
                </p>
              </div>
            </motion.div>
            {/* title */}

            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              Creating <br />
              <span className="text-accent">
                innovative solutions
              </span> <br /> that drives progress.
            </motion.h1>

            {/* subtitle */}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            >
              I blend code and creativity to craft digital experiences that
              inspire and empower. Leveraging modern frameworks, I build secure,
              high-performance web applications and solutions that solve real
              challenges and push the boundaries of technology.
            </motion.p>
            {/* btn */}
            {/* <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div> */}
            {/* <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />

          </motion.div> */}
          </div>
        </div>
        {/* image */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg img */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          {/* particles */}
          {/* <ParticlesContainer /> */}
          {/* avatar img */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[500px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </TransitionWrapper>
  );
}
