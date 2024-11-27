"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

// Modal Component
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-20"
      onClick={onClose}
    >
      <div
        className="bg-[#121212] p-6 rounded-lg w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-white mb-4 text-xl">Choose a CV to Download</h3>
        <div className="space-y-3">
          <Link
            href="https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/refs/heads/main/pdf/ITCV.pdf"
            className="block w-full py-2 px-5 rounded-full bg-gradient-to-br from-red-500 to-red-600 hover:bg-red-700 text-white text-center"
          >
            Download IT CV
          </Link>
          <Link
            href="https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/refs/heads/main/pdf/MultiMediaCV.pdf"
            className="block w-full py-2 px-5 rounded-full bg-gradient-to-br from-red-500 to-red-600 hover:bg-red-700 text-white text-center"
          >
            Download MultiMedia CV
          </Link>
        </div>
        <button
          className="absolute top-2 right-2 text-white"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            <span className="text-red-500">Hello, I&apos;m </span>
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
              style={{ fontSize: "70px" }}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          A creative professional with a dual passion for Multimedia Arts and Software Engineering. I transform ideas into captivating visuals while developing functional applications, seamlessly blending artistic vision with technical expertise..
          </p>
          <div>
          <button
  onClick={() => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 to-red-600 hover:bg-red-700 text-white"
>
  Contact Me
</button>
            <button
              onClick={handleDownloadClick}
               className="mr-3 px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 to-red-600 hover:bg-red-700 text-white mt-3"
            >
          <span className="block bg-[#121212] hover:bg-red-700 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
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

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default HeroSection;
