import React from 'react'
import { AiFillHtml5 } from "react-icons/ai";
import { TbFileTypeCss } from "react-icons/tb";import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri"






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
    <div className="flex flex-wrap -m-4 -mt-[3rem]">

        {/*Skills -1*/}
    
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-950 text-white flex-shrink-0">
              <AiFillHtml5 className='font-extrabold text-xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Html
            </h2>
          </div>
          <div className="flex-grow">

            <div className='h-1 w-full bg-yellow-950 rounded-xl'> </div>
            <p className='font-bold text-yellow-950 text-right'> 100%</p>
          </div>
        </div>
      </div>
     
     {/*Skills -2*/}
    
     <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-950 text-white flex-shrink-0">
            <TbFileTypeCss 
            className='font-extrabold text-xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">

            <div className=' relative h-1 w-full bg-yellow-600 rounded-xl'>
                <div className='absolute bg-yellow-950 h-1 rounded-xl w-[95%]'>
                    </div> </div>
            <p className='font-bold text-yellow-950 text-right'> 95%</p>
          </div>
        </div>
      </div>

      {/*Skills -3*/}

      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-950 text-white flex-shrink-0">
            <IoLogoJavascript 
            className='font-extrabold text-xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              JavaScript
            </h2>
          </div>
          <div className="flex-grow">

            <div className='relative h-1 w-full bg-yellow-700 rounded-xl'>
            <div className='absolute bg-yellow-950 h-1 rounded-xl w-[90%]'>
            </div> </div>
            <p className='font-bold text-yellow-950 text-right'> 90%</p>
          </div>
        </div>
      </div>

     {/*Skills -4*/}
    
     <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-950 text-white flex-shrink-0">
            <SiTypescript 
            className='font-extrabold text-base' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              TypeScript
            </h2>
          </div>
          <div className="flex-grow">

            <div className=' relative h-1 w-full bg-yellow-700 rounded-xl'>
            <div className='absolute bg-yellow-950 h-1 rounded-xl w-[80%]'>
            </div> </div>
            <p className='font-bold text-yellow-950 text-right'>80%</p>
          </div>
        </div>
      </div>

      {/*Skills -5*/}

      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-950 text-white flex-shrink-0">
            <RiNextjsLine  
            className='font-extrabold text-xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Next.js
            </h2>
          </div>
          <div className="flex-grow">

            <div className=' relative h-1 w-full bg-yellow-700 rounded-xl'> 
            <div className='absolute bg-yellow-950 h-1 rounded-xl w-[85%]'>
            </div>
            </div>
            <p className='font-bold text-yellow-950 text-right'>85%</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Skill