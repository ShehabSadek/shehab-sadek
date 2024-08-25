import React from 'react'
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
const SkillCard = ({skill}:{skill:{name:string, image:string}}) => {
  return (
    <Card className='w-44 h-44 p-2 justify-center items-center dark:bg-slate-800'>
    <CardContent className='p-0'>
    {skill.image ? (
        <Image
        src={require(`@/images/skills${skill.image}`).default}
        alt={skill.name}
        className=" h-20 mb-2 object-fit-contain "
        loading="lazy"
        />
    ) : (
        <Skeleton
        className="w-20 h-24 mb-2"
        style={{ borderRadius: "50%" }}
    />                      )}
    {/* <span>{skill.name}</span> */}
    </CardContent>
    <CardFooter>
        <p>{skill.name}</p>
    </CardFooter>
    </Card>
  )
}

export default SkillCard