"use client";

import { AppBar } from "@/components/app-bar";
import ParticlesBackground from "@/components/particles";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import dataJson from "@/data/data.json";
import { ReactElement } from "react";
import { Skeleton } from "@/components/ui/skeleton"
import SkillCard from "@/components/skill-card"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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

  return (
    <>
      <ParticlesBackground />
      <AppBar />
      <main className="grid lg:grid-cols-6 grid-cols-1 min-h-screen justify-between p-12 relative">
        <section className="lg:col-start-1 lg:col-end-5 p-8 bg-slate-50/90 dark:bg-slate-700/90 border border-slate-300 dark:border-slate-600 rounded-lg relative z-10">
          <div className="md:hidden absolute inset-0 z-[-1]">
            <img
              src="/shehab_miu.png"
              alt="Background"
              className="w-full h-full object-cover opacity-20 rounded-lg"
              loading="lazy"
            />
          </div>
          <h1 className="text-4xl font-bold text-center">
            <Typewriter
              options={{
                strings: ["Shehab Sadek", "Software Developer", "AI Enthusiast"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="text-xl">
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
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Major: Computer Science</li>
              <li>Minor: AI</li>
              <li>University: Misr International University</li>
              <li>
                Proficient in: Python, JavaScript, HTML/CSS, React, Node.js
              </li>
              <li>Main stack: Full-Stack</li>
              <li>Very intrigued by AI and its modern applications</li>
            </ul>

            <blockquote className="mt-6 border-l-2 pl-6 italic">
              "Design and programming are human activities; forget that and all
              is lost. ~Bjarne Stroustrup"
            </blockquote>
          </div>
        </section>

        <div className="col-start-5 col-end-7 justify-start items-center relative hidden md:flex">
          <img
            src="/shehab_grad.jpg"
            alt="Logo"
            className="object-contain rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        <section className="col-span-6 text-center mt-8">
          {Object.keys(data.skills).map((category, categoryIndex) => (
            <div
              className="col-span-6 text-center mt-8"
              key={categoryIndex}
            >
              <h2 className="text-xl font-bold mb-4">
                {category.charAt(0).toUpperCase() + category.slice(1)} Development
              </h2>
              <ul className="flex flex-wrap justify-center gap-4">
                {data.skills[category].map(
                  (skill: Skill, index: number) => (
                    <Tilt>
                    <li key={skill.name} className="flex flex-col items-center">
                      <SkillCard skill={skill}/>
                    </li>
                    </Tilt>
                  )
                )}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
