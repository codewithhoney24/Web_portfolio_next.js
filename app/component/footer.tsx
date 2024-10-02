import React from 'react';
import Image from 'next/image';
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from 'next/link';
import { AiOutlineGithub } from "react-icons/ai";
import { SiLinktree } from "react-icons/si";
import piImage from '../../public/assests/picture/pi100.png'; // Static import

function Footer() {
  return (
    <div className='bg-slate-200'>
      <footer className="text-gray-600 body-font bg-[#ab988a]">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={piImage} alt="My Portfolio" width={40} height={40} />
            <span className="ml-3 text-xl text-yellow-950 hover:bg-[#faede4]">My Portfolio</span>
          </a>
          <p className="text-sm text-yellow-950 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 My Portfolio —
            <a className="text-yellow-950">@onlinework</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link target="_blank" href={"https://www.linkedin.com/in/nousheen-atif-7873a28a"} className="text-yellow-950">
              <AiOutlineLinkedin className='text-2xl hover:text-[#2947f3]' />
            </Link>
            <Link target="_blank" href={"https://github.com/codewithhoney24/codewithhoney24.git"} className="ml-3 text-yellow-950">
              <AiOutlineGithub className='text-2xl hover:text-[#3bcbec]' />
            </Link>
            <Link target="_blank" href={"https://linktr.ee/codewithcoding24"} className="ml-3 text-yellow-950">
              <SiLinktree   className='text-2xl hover:text-[#50a950]' />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
