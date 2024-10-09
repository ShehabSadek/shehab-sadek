import React, { useEffect } from 'react'
import AOS from "aos";
import dataJson from "@/data/data.json";
import SkillCard from "@/components/skill-card"
import Tilt from "react-parallax-tilt";


interface Skill {
    name: string;
    image: string;
}

interface SkillsData {
    skills: {
      [category: string]: Skill[];
    };
  }

function Skills() {
    const data: SkillsData = dataJson;
    useEffect(() => {
      AOS.init({
        // easing: "ease-out-cubic",
        once: false,
        offset: 50,
      });
    }, [])
  return (
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
  )
}

export default Skills