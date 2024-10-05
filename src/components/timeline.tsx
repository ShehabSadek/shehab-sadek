"use client"
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  // @ts-ignore
  import  dataJson  from "@/data/data.json";
  import { DotIcon } from "lucide-react";


  const Timeline = () => {
    interface Experience {
      title: string;
      subtitle: string;
      description: string[];
      date: string;
      icon:string;
    }[];

    const data: Experience[] = dataJson.experience;
    return (
      <VerticalTimeline>
        {data.map((exp) => (
          <VerticalTimelineElement
            visible={true}
            key={exp.subtitle}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "hsl(233,18%,19%)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #10b981" }}
            date={exp.date}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img src={exp.icon} alt={exp.title} className="xl:w-11 w-11" />
                
              </div>
            }
            iconStyle={{
              background: "#64748B",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="vertical-timeline-element-title text-highlightCustom">
              {exp.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-highlightDarkCustom">
              {exp.subtitle}
            </h4>
            <ul className="mt-4">
              {exp.description.map((point) => (
                <div key={point} className="flex flex-row items-start">
                  {exp.description.length > 1 ? (
                    <DotIcon className="mr-2 text-highlightCustom" />
                  ) : null}
                  <li>{point}</li>
                </div>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    );
  };
  
  export default Timeline;