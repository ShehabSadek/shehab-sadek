"use client";

import { AppBar } from "@/components/app-bar";
import ParticlesBackground from "@/components/particles";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import dataJson from "@/data/data.json";
import { ReactElement, useEffect } from "react";
import SkillCard from "@/components/skill-card"
import TimelineComponent from "@/components/timeline"

import AOS from "aos";

import "aos/dist/aos.css";
interface Skill {
  name: string;
  image: string;
}
interface SkillsData {
  skills: {
    [category: string]: Skill[];
  };
}

export default function Home(): ReactElement {
  const data: SkillsData = dataJson;
  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, [])
  return (
    <>
      <ParticlesBackground />
      <AppBar />
      <main className="grid lg:grid-cols-6 grid-cols-1 min-h-screen justify-between p-12 mt-24  relative scroll-smooth">
      <section className="lg:col-start-1 lg:col-end-7 p-8 bg-slate-50/90 dark:bg-slate-700/90 border border-slate-300 dark:border-slate-600 rounded-lg relative z-1 flex flex-col md:flex-row">
  <div className="w-full md:w-3/4 flex flex-col justify-start items-center relative">
    <h1 className="text-4xl font-bold text-center mb-6">
      <Typewriter
        options={{
          strings: ["Shehab Sadek", "Software Developer", "AI Enthusiast"],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
    <div className="text-2xl mt-6" id="about">
      <p>
        As an adept computer science student with a robust proficiency in
        programming and web development, I am actively pursuing a
        challenging and gratifying opportunity to advance my skills and
        contribute substantively to a progressive organization. Possessing
        unwavering confidence in my capacity to rapidly assimilate new
        concepts and adapt to dynamic environments, I am enthusiastic
        about embracing fresh challenges and assuming increased
        responsibilities.
      </p>
      <ul className="my-28 ml-6 list-disc [&>li]:mt-2">
        <li>Major: Computer Science</li>
        <li>Minor: AI</li>
        <li>University: Misr International University</li>
        <li>Proficient in: Python, JavaScript, HTML/CSS, React, Node.js</li>
        <li>Main stack: Full-Stack</li>
        <li>Always open to learning new tech :)</li>
      </ul>
      <blockquote className="mt-6 border-l-2 pl-6 italic text-xl">
        "Design and programming are human activities; forget that and all
        is lost. ~Bjarne Stroustrup"
      </blockquote>
    </div>
  </div>

  <div className="w-full md:w-1/4 flex justify-center md:justify-end items-start md:absolute md:top-20 md:right-20">
    <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-slate-300 dark:border-slate-900">
      <img
        src="/me-suit.png"
        alt="Avatar"
        className="w-full h-full object-contain bg-slate-200 dark:bg-slate-600"
        loading="lazy"
      />
    </div>
  </div>
</section>


        <section id="skills" className="col-span-6 text-center mt-8">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Skills</h1>
          {Object.keys(data.skills).map((category, categoryIndex) => (
            <div
              className="col-span-6 text-center mt-8"
              key={categoryIndex}
              
            >
              <h2 className="text-xl font-bold mb-4 ">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              <ul className="flex flex-wrap justify-center gap-4">
                {data.skills[category].map(
                  (skill: Skill, index: number) => (
                    <Tilt>
                    <li key={skill.name} className="flex flex-col items-center"data-aos="fade-up" >
                      <SkillCard skill={skill} />
                    </li>
                    </Tilt>
                  )
                )}
              </ul>
            </div>
          ))}
        </section>
        <section id="exp" className="col-span-6 text-center items-center justify-content mt-8">
          EXPERIENCE
          <TimelineComponent/>
        </section>
      </main>
    </>
  );
}
