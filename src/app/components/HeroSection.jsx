"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-red-500">
  Hello, I&apos;m{" "}
</span>

            <br />
            <TypeAnimation
  sequence={[
    1000,
    "John Heinrich Fabros",
    1000,
    "Software Developer",
    1000,
    "Multimedia Artist",
    1000,
  ]}
  wrapper="span"
  speed={30}
  repeat={Infinity}
  style={{ fontSize: "70px" }} // Adjust the font size as needed
/>

          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Taguig City-based creative with a dual passion for Multimedia Arts and Software Engineering. I bring ideas to life visually and build functional applications, blurring the lines between artistry and technical expertise.
          </p>
          <div>
  <Link
    href="/#contact"
    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 to-red-600 hover:bg-red-700 text-white"
  >
    Contact Me
  </Link>
  <Link
    href="/"
    className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 to-red-600 hover:bg-red-700 text-white mt-3"
  >
    <span className="block bg-[#121212] hover:bg-red-700 rounded-full px-5 py-2">
      Download CV
    </span>
  </Link>
</div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
  src="https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/logo.png"
  alt="logo"
  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
  width={300}
  height={300}
/>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
