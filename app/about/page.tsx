"use client";
import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiCsharp,
  SiTypescript,
  SiGo,
  SiAzuredevops,
  SiNextdotjs,
  SiDotnet,
  SiGraphql,
  SiMongodb,
  SiMicrosoftsqlserver,
} from "react-icons/si";

// import {  SiJenkins, SiOctopusdeploy } from "react-icons/si";
// import { , SiPostman, SiSwagger } from "react-icons/si";

import { SiPostgresql, SiMysql } from "react-icons/si";

// components
import Circles from "../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

// counter
import CountUp from "react-countup";
import TransitionWrapper from "../components/TransitionWrapper";
import Transition from "../components/Transition";

//  about data type definition
interface AboutInfo {
  title: string;
  stage?: string;
  icons?: JSX.Element[];
}

// About data interface
interface AboutSection {
  title: string;
  info: AboutInfo[];
}

export const aboutData: AboutSection[] = [
  {
    title: "skills",
    info: [
      {
        title: "Languages",
        icons: [
          <FaJs key="js" />,
          <SiCsharp key="csharp" />,
          <SiTypescript key="typescript" />,
          <SiGo key="go" />,
        ],
      },
      {
        title: "Frameworks",
        icons: [
          <FaReact key="react" />,
          <FaNodeJs key="nodejs" />,
          <SiDotnet key="dotnet" />,
          <SiNextdotjs key="nextjs" />,
        ],
      },
      {
        title: "Other Tools",
        icons: [
          <FaAws key="aws" />,
          <FaDocker key="docker" />,
          <SiAzuredevops key="azure" />,
          <SiMicrosoftsqlserver key="serversql" />,
          <SiMongodb key="mongodb" />,
          <SiGraphql key="graphql" />,
        ],
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  {
    title: "experience",
    info: [
      {
        title: "Software Engineer - HIREWay",
        stage: "2024",
      },
      {
        title: "Software Engineer - Venture Garden Group ",
        stage: "2019 - 2022",
      },
      {
        title: "Web Developer - JAYCom Services",
        stage: "2018 - 2019",
      },
    ],
  },
  // {
  //   title: "credentials",
  //   info: [
  //     {
  //       title: "Web Development - ABC University, LA, CA",
  //       stage: "2011",
  //     },
  //     {
  //       title: "Computer Science Diploma - AV Technical Institute",
  //       stage: "2009",
  //     },
  //     {
  //       title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
  //       stage: "2006",
  //     },
  //   ],
  // },
];

const About: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <TransitionWrapper>
      <Transition />

      <div className="h-full bg-primary/30 py-40 text-center xl:text-left">
        <Circles />
        {/* avatar img */}

        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row justify-between md:pt-20">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              Architecting <span className="text-accent">transformative</span>{" "}
              digital ecosystems with{" "}
              <span className="text-accent3">quantum</span> precision.
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              My journey as a software engineer began 6 years ago. I've worked
              with digital agencies, tech companies, and pursued freelance
              projects, collaborating with talented professionals to develop
              digital products for business and consumer markets
            </motion.p>
          </div>

          {/* info */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full  h-full xl:max-w-[48%]  pl-[200px]"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${
                      index === itemIndex &&
                      "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    {/* title */}
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                      {/* icons */}
                      {item.icons?.map((icon, i) => {
                        return (
                          <div key={i} className="text-2xl text-white">
                            {icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F13024] hover:bg-[#e7594e] max-w-[160px] text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out"
            >
              View My Resume
            </a>
          </motion.div>
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default About;
