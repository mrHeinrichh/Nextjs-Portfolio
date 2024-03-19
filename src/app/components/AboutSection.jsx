"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "End-User Skills (Front-end)",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>Flutter</li>
        <li>React Native</li>
      </ul>
    ),
  },
  {
    title: "Backend",
    id: "backend",
    content: (
      <ul className="list-disc pl-2">
        <li>Firebase</li>
        <li>PHP</li>
        <li>Laravel</li>
        <li>Nodejs</li>
        <li>C#</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Apimanagement",
    id: "apimanagement",
    content: (
      <ul className="list-disc pl-2">
        <li>SwaggerJS</li>
        <li>Postman</li>
        <li>Insomia</li>
        <li>Paw</li>
        <li>Restlet Studio</li>
        <li>SoapUI</li>
      </ul>
    ),
  },
  {
    title: "Database",
    id: "database",
    content: (
      <ul className="list-disc pl-2">
        <li>MySQL</li>
        <li>Sqlite</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Editing",
    id: "editing",
    content: (
      <ul className="list-disc pl-2">
        <li>Adobe Photoshop</li>
        <li>Adobe Premiere Pro</li>
        <li>Adobe After Effects</li>
        <li>Adobe Lightroom</li>
        <li>Adobe Illustrator</li>
        <li>Adobe XD</li>
        <li>Figma</li>
        <li>Adobe Audition</li>
        <li>Final Cut Pro</li>
        <li>DaVinci Resolve</li>
        <li>Canva</li>
      </ul>
    ),
  },
  {
    title: "Administrative",
    id: "administrative",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft Word</li>
        <li>Microsoft Excel</li>
        <li>Microsoft Access</li>
        <li>Microsoft Powerpoint</li>
        <li>Google Docs</li>
        <li>Google Sheets</li>
        <li>Google Slides</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/me.jpg" width={500} height={500} alt="John Heinrich Fabros" />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hi there! I&apos;m John Heinrich Fabros, a hybrid creative based in Taguig City. I bridge the gap between the artistic and technical worlds, working as both a Multimedia Artist and a Software Engineer.
  On the artistic side, I bring stories and ideas to life through videography, video editing, photography, and graphic design. I also have experience managing social media content.
  In my software engineering role, I leverage my technical skills in front-end and back-end development, along with database management, to build functional and engaging applications.
  This unique blend of talents allows me to approach projects from a well-rounded perspective, infusing creativity with technical know-how.

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
             Front End{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              {" "}
              Back End{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("apimanagement")}
              active={tab === "apimanagement"}
            >
              {" "}
              Api Management{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("database")}
              active={tab === "database"}
            >
              {" "}
              Database{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("editing")}
              active={tab === "editing"}
            >
              {" "}
              Editing Tools{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("administrative")}
              active={tab === "administrative"}
            >
              {" "}
              Administrative Tools{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
