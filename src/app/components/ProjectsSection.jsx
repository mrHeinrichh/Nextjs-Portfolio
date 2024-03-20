"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "LPG eCommerce Customer/Retailer Website & Application",
    description: "JE Moral LPG Application for customer and retailer interface with live location tracking for delivery and order management.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-1.jpg",
    tag: ["All", "Mobile",  "Web"],
    gitUrl: "https://github.com/mrHeinrichh?tab=repositories",
    previewUrl: "https://mrheinrichh.github.io/web-mobile-download-interface/",
  },
  {
    id: 2,
    title: "LPG Admin Dashboard Website & Application",
    description: "JE Moral LPG Application for admin interface with live location tracking for delivery and order management.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-2.jpg",
    tag: ["All", "Mobile", "Web"],
    gitUrl: "https://github.com/mrHeinrichh?tab=repositories",
    previewUrl: "https://lpg-web-o5in.vercel.app",
  },
  {
    id: 3,
    title: "JE Moral LPG Driver Delivery Application",
    description: "This application is for the delivery drivers of JE Moral LPG. It has a live location tracking for delivery and transaction delivery management.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-3.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mrHeinrichh?tab=repositories",
    previewUrl: "https://github.com/mrHeinrichh?tab=repositories",
  },
  {
    id: 4,
    title: "Crazy Fish Hub Website",
    description: "CrayFishHub is an online platform for crayfish enthusiasts worldwide, offering comprehensive resources on crayfish care, recipes, and community connections. Powered by the Next.js framework, it delivers a dynamic and engaging user experience.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-4.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrHeinrichh?tab=repositories",
    previewUrl: "https://cray-fish-hub-frontend.vercel.app",
  },
  {
    id: 5,
    title: "Excel to Web Application using Streamlit Python Library for Sentimental Analysis",
    description: "A project aimed at transforming an Excel-based sentiment analysis tool into an interactive web application. Leveraging the Streamlit Python library, this application provides users with a seamless and intuitive interface for conducting sentiment analysis on text data",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrHeinrichh/LPG-Excel-WebApp-StreamLit",
    previewUrl: "https://lpg-excel-webapp-streamlit.onrender.com",
  },
  {
    id: 6,
    title: "BAUCHA Crypto Voucher Platform",
    description: "WEB & UI/UX DESIGN - Crypto Voucher Platform used for WEB3 Festival Hackathon 2022",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-6.jpg",
    tag: ["All", "Web" , "UI/UX"],
    gitUrl: "https://www.figma.com/file/GuV6hEJOj63s1QcWl8GWZr/crypto-8?type=design&mode=design&t=yRKVrXEwK9fbE7W9-0",
    previewUrl: "https://www.canva.com/design/DAFRxkdoBiE/mshGQcjVXBg3F0Woxsalyg/edit",
  },
  {
    id: 7,
    title: "Promdifarm Rider Mobile Application",
    description: "Mobile & UI/UX DESIGN Rider Application for Promdifarm Delivery Service",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-7.jpg",
    tag: ["All", "Mobile" , "UI/UX"],
    gitUrl: "https://github.com/mrHeinrichh/Flutter-Promdifarm-RiderAPP",
    previewUrl: "https://www.figma.com/proto/uE3O2zrcDGhedyOgjC2pTI/CLONED-PROMDIFARM?node-id=1-29639&starting-point-node-id=1%3A29579",
  },
  {
    id: 8,
    title: "Promdifarm Customer/Farmer Mobile eCommerce Application",
    description: "Mobile & UI/UX DESIGN Customer/Farmer eCommerce Application for Promdifarm Ordering Transactions",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-8.jpg",
    tag: ["All", "Mobile" , "UI/UX"],
    gitUrl: "https://github.com/mrHeinrichh/Flutter-Promdifarm-RiderAPP",
    previewUrl: "https://www.figma.com/proto/uE3O2zrcDGhedyOgjC2pTI/CLONED-PROMDIFARM?node-id=1-29639&starting-point-node-id=1%3A29579",
  },
  {
    id: 9,
    title: "Redframe Camera Rentals Website",
    description: "Redframe Camera Rentals Website using HTML CSS and Bootstrap",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-9.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrHeinrichh/RedFrame-Rentals-Bootstrap/",
    previewUrl: "https://mrheinrichh.github.io/RedFrame-Rentals-Bootstrap/",
  },
  {
    id: 10,
    title: "JE Moral LPG Applications UI/UX Design",
    description: "This design is for the JE Moral LPG Applications UI/UX Design for customer, retailer, and driver interface with live location tracking for delivery and order management.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-10.jpg",
    tag: ["All", "UI/UX"],
    gitUrl: "https://www.figma.com/file/1yv7e8uaFl9NpCTUSNWKBq/LPG-TANK-JE-MORAL-STORE?type=design&node-id=0-1&mode=design&t=XQWqMORFAz1DJQF3-0",
    previewUrl: "https://www.figma.com/file/1yv7e8uaFl9NpCTUSNWKBq/LPG-TANK-JE-MORAL-STORE?type=design&node-id=0-1&mode=design&t=XQWqMORFAz1DJQF3-0",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
             <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
          <ProjectTag
          onClick={handleTagChange}
          name="Video Contents"
          isSelected={tag === "Video"}
        />
          <ProjectTag
          onClick={handleTagChange}
          name="Graphic Designs"
          isSelected={tag === "graphic"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
