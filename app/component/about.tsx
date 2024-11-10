import React from "react";
import Image from "next/image";
import Link from "next/link";
import GirlImage from "../../public/assests/picture/girl001.jpg"; // Static import

function About() {
  return (
    <div id="About">
      <section className="bg-[#e9dcd3]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto  w-[350px] h-[350px]"
              alt="hero"
              src={GirlImage} // Use static import
              width={350}
              height={350}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-950">
              About Me
            </h1>
            <p className="mb-4 leading-relaxed line-clamp-5 text-yellow-950">
              As a dedicated student at GIAIC, I have honed my skills in
              HTML, CSS, and JavaScript, creating impactful projects across
              various domains. My journey has led me to work on a range of
              projects, from a dynamic student management system to an
              intuitive currency converter, all designed with
              user-friendliness and efficiency in mind. Currently, I’m
              deepening my expertise in TypeScript and Python, eager to apply
              modern modules and frameworks to real-world solutions. Beyond
              coding, I love exploring design, refining user interfaces, and
              staying updated with the latest tech trends. Always excited to
              collaborate, I aim to continuously grow, innovate, and
              contribute to impactful projects. Let...s connect and create
              something amazing together...
            </p>
            <div className="flex justify-center">
              <Link href="https://hackathon-milestones01-02-q7c5.vercel.app/">
                <button className="inline-flex text-white  bg-yellow-950 border-0 py-2 px-6 focus:outline-none hover:bg-[#6b5d53] rounded text-lg">
                  View CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
