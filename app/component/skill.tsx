import React from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { TbFileTypeCss } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { BiAnalyse } from "react-icons/bi";
import { MdOutlinePeopleAlt, MdBugReport } from "react-icons/md";
import { SiGoogleoptimize } from "react-icons/si";
import { SiAffinitydesigner } from "react-icons/si";

function Skill() {
  return (
    <div id="skill">
      <section className="bg-[#ded8d5] body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-yellow-950 tracking-widest font-medium title-font mb-1">
              Skills Set
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>

          {/* Frontend Technologies Section */}
          <div className="mb-10 text-center">
            <h2 className="text-lg font-semibold text-gray-800">Frontend Technologies</h2>
            <div className="flex flex-wrap -m-4 -mt-4">
              <SkillCard icon={<AiFillHtml5 />} skill="HTML" level="100%" />
              <SkillCard icon={<TbFileTypeCss />} skill="CSS" level="95%" />
              <SkillCard icon={<IoLogoJavascript />} skill="JavaScript" level="90%" />
              <SkillCard icon={<SiTypescript />} skill="TypeScript" level="80%" />
              <SkillCard icon={<RiNextjsLine />} skill="Next.js" level="85%" />
            </div>
          </div>

          {/* Design & Prototyping Section */}
          <div className="mb-10 text-center">
            <h2 className="text-lg font-semibold text-gray-800">Design & Prototyping</h2>
            <div className="flex flex-wrap -m-4 -mt-4">
              <SkillCard icon={<FaFigma />} skill="Figma" level="90%" />
              <SkillCard icon={<BiAnalyse />} skill="Responsive Design" level="85%" />
              <SkillCard icon={<SiAffinitydesigner />} skill="UX/UI principles" level="80%" />

            </div>
          </div>

          {/* Problem Solving Section */}
          <div className="mb-10 text-center">
            <h2 className="text-lg font-semibold text-gray-800">Problem Solving</h2>
            <div className="flex flex-wrap -m-4 -mt-4">
              <SkillCard icon={<BiAnalyse />} skill="Analytical Thinking" level="80%" />
              <SkillCard icon={<MdBugReport />} skill="Debugging" level="85%" />
              <SkillCard icon={<SiGoogleoptimize  />} skill="code optimization" level="80%" />
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="mb-10 text-center">
            <h2 className="text-lg font-semibold text-gray-800">Soft Skills</h2>
            <div className="flex flex-wrap -m-4 -mt-4">
              <SkillCard icon={<MdOutlinePeopleAlt />} skill="Teamwork" level="90%" />
              <SkillCard icon={<MdOutlinePeopleAlt />} skill="Communication" level="85%" />
              <SkillCard icon={<MdOutlinePeopleAlt />} skill="Adaptability" level="80%" />
              <SkillCard icon={<MdOutlinePeopleAlt />} skill="Project Management" level="75%" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component for individual skill cards
const SkillCard = ({ icon, skill, level }: { icon: React.ReactNode, skill: string, level: string }) => (
  <div className="p-4 md:w-1/3">
    <div className="flex rounded-lg h-full p-8 flex-col">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-950 text-white flex-shrink-0">
          {icon}
        </div>
        <h2 className="text-gray-900 text-lg title-font font-medium">{skill}</h2>
      </div>
      <div className="flex-grow">
        <div className='relative h-1 w-full bg-yellow-600 rounded-xl'>
          <div className='absolute bg-yellow-950 h-1 rounded-xl' style={{ width: level }}></div>
        </div>
        <p className='font-bold text-yellow-950 text-right'>{level}</p>
      </div>
    </div>
  </div>
);

export default Skill;
