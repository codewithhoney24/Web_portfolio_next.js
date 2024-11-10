"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";


function Hero() {
  return (
    <div>
      <section className="body-font bg-[#faede4]">
        <div className="container mx-auto flex px-2 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" text-yellow-950 title-font sm:text-4xl text-3xl mb-4 font-medium lg:ml-10">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Web 3.0 Developer", "AI", "Metaverse"],
                  autoStart: true,
                  loop: true
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px]  bg-yellow-950 lg:ml-10" />
            <p className="mb-8 leading-relaxed font-semibold lg:ml-10">
              As a dedicated student at GIAIC, I ve built a solid foundation in
              HTML CSS JavaScript TypeScript and Next.js fueling my journey into the world of
              technology.
            </p>
            <div className="flex justify-center lg:ml-10">
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/nousheen-atif-7873a28a"}
                className="text-yellow-950"
              >
                <button className="inline-flex text-white  bg-yellow-950 border-0 py-2 px-6 focus:outline-none hover:bg-[#6b5d53] rounded text-lg">
                  LinkedIn
                </button>
              </Link>

              <Link
                target="_blank"
                href={"https://github.com/codewithhoney24/codewithhoney24.git"}
                className="text-yellow-950"
              >
                <button className=" ml-4 inline-flex text-yellow-950 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-[#918074] rounded text-lg">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
  className="object-cover object-center rounded mx-auto w-[25rem]"
  src="/assests/picture/p001.jpg" // Ensure the path is correct relative to your public folder
  alt="hero"
  width={400} // You can specify width and height
  height={400}
/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
