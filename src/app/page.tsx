"use client";

import { AppBar } from "@/components/app-bar";
import ParticlesBackground from "@/components/particles";
import { ReactElement } from "react";
import TimelineComponent from "@/components/timeline"
import "aos/dist/aos.css";
import Introduction from "@/components/introduction";
import Skills from "@/components/skills";
import Contact from "@/components/contact";



export default function Home(): ReactElement {

  return (
    <>
      <ParticlesBackground />
      <AppBar />
      <main className="grid lg:grid-cols-6 grid-cols-1 min-h-screen justify-between p-12 mt-24  relative scroll-smooth">
        <Introduction/>
        <Skills/>
        <section id="exp" className="col-span-6 text-center items-center justify-content mt-8">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">EXPERIENCE</h1>
          <TimelineComponent/>
        </section>
        <Contact/>
      </main>
    </>
  );
}
