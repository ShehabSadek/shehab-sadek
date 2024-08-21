"use client";

import { AppBar } from "@/components/app-bar";
import ParticlesBackground from "@/components/particles";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <AppBar />
      <main className="grid lg:grid-cols-6 grid-cols-1 min-h-screen justify-between p-12 relative">
        <section className="lg:col-start-1 lg:col-end-5  bg-slate-50/90 dark:bg-slate-700/90 border border-slate-300 dark:border-slate-600 rounded-lg relative z-10">
        <div className="md:hidden absolute inset-0 z-[-1]">
            <img
              src="/shehab_grad.jpg"
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
          <p>
            For years parents have espoused the health benefits of eating garlic bread with cheese to their
            children, with the food earning such an iconic status in our culture that kids will often dress
            up as warm, cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
            springing up around the country.
          </p>
        </section>
        <div className="col-start-5 col-end-7 justify-start items-center relative hidden md:flex">
          <img
            src="/shehab_grad.jpg"
            alt="Logo"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
        <section className="col-span-6 text-center mt-8">
          hiiiiii
        </section>
      </main>

    </>
  );
}
