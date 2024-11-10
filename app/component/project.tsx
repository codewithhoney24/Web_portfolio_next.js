import Link from "next/link";
import React from "react";
import Image from "next/image";

function Project() {
  return (
    <div id="Project">
      <section className="bg-[#b6a396] body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="lg::text-4xl sm:text-4xl font-medium title-font mb-4 text-yellow-950">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-yellow-950">
              Explore a range of innovative dynamic projects and each project
              leverages modern modules libraries and frameworks for an
              intuitive, user-friendly experience. Designed for efficiency and
              ease these tools showcase powerful functionality in sleek
              interactive interfaces!
            </p>
          </div>
          <div className="flex flex-wrap -mt-[3rem]" >
            {/* project 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 ">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src="/assests/project/prj01.jpg"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-yellow-950 bg-[#d4baa7] opacity-0 hover:opacity-100">
                  <h2 className=" ml-1 tracking-widest text-xl title-font font-bold text-yellow-950">
                    User-Friendly
                  </h2>
                  <h1 className="title-font text-xl font-extrabold text-yellow-950">
                    Currency Convertor
                  </h1>
                  <p className="leading-relaxed text-yellow-950 line-clamp-2">
                    This project showcases my ability to handle real-time data
                    API integration and provide user-friendly functionality.
                    Excited to explore further and implement advanced features...
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://github.com/codewithhoney24/currency-convertor.git"
                    }
                  >
                    <p className="leading-relaxed text-yellow-950 font-extrabold hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assests/project/Todo.jpg"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-yellow-950 bg-[#d4baa7] opacity-0 hover:opacity-100">
                  <h2 className=" ml-1 tracking-widest text-xl title-font font-bold text-yellow-950">
                    User-Activities
                  </h2>
                  <h1 className="title-font text-2xl font-extrabold text-yellow-950">
                    Todo App
                  </h1>
                  <p className="leading-relaxed text-yellow-950 line-clamp-2">
                    I have developed a To-Do app using Next.js, perfect for anyone
                    looking to stay organized and on top of their tasks. The app
                    provides a simple, intuitive interface to add, edit, and
                    delete tasks, all with a smooth user experience...
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://github.com/codewithhoney24/Todo-App-next.js.git"
                    }
                  >
                    <p className="leading-relaxed text-yellow-950 font-extrabold hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative " >
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assests/project/oop.jpg"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5  relative z-10 w-full border-4 border-yellow-950 bg-[#d4baa7] opacity-0 hover:opacity-100">
                  <h2 className=" ml-1 tracking-widest text-xl title-font font-bold text-yellow-950">
                    User-Interface
                  </h2>
                  <h1 className="title-font text-2xl font-extrabold text-yellow-950">
                    Oop My Bank
                  </h1>
                  <p className="leading-relaxed text-yellow-950 line-clamp-2">
                    The My Bank TypeScript project uses Object-Oriented Programming (OOP) to create a streamlined banking system with a user-friendly interface...
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/codewithhoney24/Oop-My-bank.git"}
                  >
                    <p className="leading-relaxed text-yellow-950 font-extrabold hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
 {/* More Projects and Vercel Button */}
 <div className="flex justify-center gap-4 mt-10">
            <Link
              href="https://github.com/codewithhoney24"
              target="_blank"
              className="bg-yellow-950 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-800"
            >
              More Projects on GitHub
            </Link>
            <Link
              href="https://vercel.com/nousheen-atif"
              target="_blank"
              className=" text-yellow-950 bg-gray-100 border-0 py-3 px-6 focus:outline-none hover:bg-[#918074] rounded-lg font-bold"
            >
              View Project on Vercel
            </Link>
          </div>


        </div>
      </section>
    </div>
  );
}

export default Project;
