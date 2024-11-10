import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { AiOutlineCloudDownload } from 'react-icons/ai';



function Navbar() {
  return (
    <div className='z-50 sticky top-0'>
    <header className="text-yellow-950 h-16 body-font bg-[#d4baa7] ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-extrabold items-center text-yellow-950   ">
    <Image src="/assests/picture/pi100.png" alt="My Portfolio" width={40} height={40} className='-mt-2' />

      <span className="ml-2  -mt-2 text-2xl hover:text-yellow-700">My Portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap font-extrabold items-center text-base justify-center">
      <Link  href="/"className="mr-5 hover:text-yellow-700">Home</Link>
      <Link  href={"#About"}className="mr-5 hover:text-yellow-700">About</Link>
      <Link  href={"#skill"}className="mr-5 hover:text-yellow-700">Skills</Link>
      <Link  href={"#Project"}className="mr-5 hover:text-yellow-700">Projects</Link>
      <Link  href={"#Contact"} className="mr-5 hover:text-yellow-700">Contact</Link>
      
    </nav>
    <a href="https://hackathon-milestones01-02-q7c5.vercel.app/">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-[#918074] rounded  font-extrabold text-base  mt-4 md:mt-0">
      Download Cv
<AiOutlineCloudDownload className='text-xl ml-2'/>
    </button>
   </a> 
  </div>
</header>
</div>
  )       
}

export default Navbar