'use client';
import React from "react";
import Image from "next/image";
import { Slide} from "react-awesome-reveal";
import { TypeAnimation } from 'react-type-animation';
import github from '../images/github.png';
import phone from '../images/phone.gif';
import linkedin from '../images/linkedin.png';
import mail from '../images/email-file.gif';
import user from '../images/user.gif';
import goal from '../images/goals.gif';
import Link  from "next/link";
import working from '../images/working.gif';
import man from '../images/man.jpeg';
import { FaHtml5 ,FaReact } from "react-icons/fa";
import { BsFiletypeCss } from "react-icons/bs";
import { SiJavascript,SiTypescript,SiTailwindcss,SiNextdotjs,SiExpress,SiMongodb,SiJulia,SiSolidity} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { PiFileSql } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";
import projects from './projects.js';
import { BsGithub } from "react-icons/bs";


export default function Home() {
  const[active,setActive]=React.useState('home');
  const[project,setProject]=React.useState(projects);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      {/* navbar */}
   <div className="navbar bg-white fixed top-0 z-10 shadow-md">
  <div className="navbar-start">
    <div className="dropdown sm:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost text-black btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-black">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="https://drive.google.com/file/d/12HK6FRt9wtRAZDbA10MCbVpdYy1ZpfKe/view?usp=sharing">Resume</a></li>
        <li><a href="#achievement">Achievement</a></li>
      </ul>
    </div>
  </div>
  {/* <div className="navbar-center">
    <a className="btn btn-ghost text-xl text-[#041562]">Profolio</a>
  </div> */}
  <div className="navbar-end hidden sm:block sm:flex justify-center space-x-10 font-bold">
    <button className={active==='home' ?'text-[#912BBC]':'null'} onClick={()=>setActive('home')}>
    <a href="#home" className="hover:text-[#9039b5]">Home</a>
    </button>
    <button className={active==='about' ?'text-[#912BBC]':'null'}  onClick={()=>setActive('about')}>
    <a href="#about" className="hover:text-[#9039b5]">About</a>
    </button>
    <button className={active==='project' ?'text-[#912BBC]':'null'}  onClick={()=>setActive('project')}>
    <a href="#projects" className="hover:text-[#9039b5]">Projects</a>
    </button>
    <button className={active==='resume' ?'text-[#912BBC]':'null'}  onClick={()=>setActive('resume')}>
    <a href="https://drive.google.com/file/d/12HK6FRt9wtRAZDbA10MCbVpdYy1ZpfKe/view?usp=sharing" className="hover:text-[#9039b5]">Resume</a>
    </button>
    <button className={active==='achievement' ?'text-[#912BBC]':'null'}  onClick={()=>setActive('achievement')}>
    <a href="#achievement" className="hover:text-[#9039b5]">Achievement</a>
    </button>
  </div>
</div>
{/* navbar */}

{/* Home */}
<div className="hero min-h-screen bg-zinc-50" >
  <div className="hero-content text-center" id="home">
    <div className="max-w-xl space-y-10 ">
      <h1 className="text-5xl font-bold  mt-[80px]">
      <Slide direction="up">
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent text-5xl sm:text-[70px]">
      Hi I'm a
      </div>
      </Slide>
      <Slide direction="up">
      <div className="bg-gradient-to-r from-zinc-500 via-white-500 to-black bg-clip-text text-transparent text-5xl  sm:text-[70px]">
       Web Developer
      </div>
      </Slide>
      </h1>
      <Slide direction="up">
       <p className="py-6">A highly skilled Full Stack Developer, I am adept in both front-end and back-end development processes. My expertise lies in meticulously designing, developing, and implementing functional specifications. This combined skillset allows me to bridge the gap between conceptual ideas and tangible applications, ensuring successful project execution from start to finish</p>
       </Slide>

       <Slide direction="up">
       <div className="bg-gradient-to-r from-black via-blue-800 to-black bg-clip-text text-transparent text-3xl sm:text-[40px] tracking-wider">
        The best error message is the one that never shows up...
       </div>
       </Slide>

       <Slide direction="up">
      <div className="flex justify-end ">
        <p className="text-black text-2xl from">- by Thomas Fuchs</p>
      </div>
      </Slide>

     <div className="flex justify-center space-x-5">
     <Slide direction="up">
     <a href="https://www.linkedin.com/in/saravanakumar-v-39447427b/"><Image src={linkedin} className="w-[60px]"/></a>
     <a href="https://github.com/mr-saravanakumar"><Image src={github}  className="w-[60px]"/></a>
     <a href="mr.saravanakumar2002@gmailc.com"><Image src={mail} className="w-[70px]"/></a>
     </Slide>
    </div>
       
     
     <div className="flex justify-center items-center space-x-5">
     <Slide direction="up">
      <Image src={phone} className="w-10"/>
      <p className="text-xl ">6381590532</p>
    </Slide>
    </div>

      <div className="flex justify-center">
      <Slide direction="up">
        <Image src={working} className="w-[100%] bg-none"/>
      </Slide>
      </div>

    </div>
  </div>
</div>
{/* Home */}

{/* About */}

<div className="hero min-h-screen bg-zinc-100" id="about">
  <div className="hero-content text-center">

    <div className="space-y-10  mt-[80px]">
    <Slide direction="up">
      <h1 className="text-5xl font-bold">ABOUT</h1>
    </Slide>

    <div className="sm:flex justify-center pt-10 space-y-10">

    <div>
      {/* <Slide direction="up">
       <Image src={man} className="h-[500px] w-[600px]"/>
      </Slide> */}
    </div>
      
      <div className="space-y-10 sm:pl-10">
      <div>
      <Slide direction="up">
        <p>Hi there! I'm ,<span className="text-zinc-500">Saravanakumar</span>, a passionate full stack web developer with a knack for crafting dynamic and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I thrive on turning ideas into interactive digital experiences.</p>
      </Slide>
      </div>

    <div className="grid sm:grid-cols-5 sm:gap-[30px] text-black grid-cols-3 gap-[25px] sm:pl-20 p-10">
    <Slide>
    <FaHtml5 size={50}/>
    <BsFiletypeCss size={50}/>
    <SiJavascript size={50}/>
    <SiTypescript size={50}/>
    <SiTailwindcss size={50}/>
    <FaReact size={50}/>
    <SiNextdotjs size={50}/>
    <DiNodejs size={50}/>
    <SiExpress size={50}/>
    <SiMongodb size={50}/>
    <SiJulia size={50}/>
    <PiFileSql size={50}/>
    <SiSolidity size={50}/>
    </Slide>
    </div>
     
     <div className="text-[#401F71]">
     <TypeAnimation
      sequence={[
        'HTML...',
        1000, 
        'CSS...',
        1000,
        'Javascript...',
        1000,
        'React js...',
        1000,
        'Node js...',
        1000,
        'Express js...',
        1000,
        'next js...',
        1000,
        'Mongodb...',
        1000,
        'TailwindCss...',
        1000,
        'Blockchain...',
        1000,
        'SQL...',
        1000,
        'C...',
        1000,
        'C++..',
        1000,
        'JAVA...',
        1000,
        'JULIA..',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
     </div>
    </div>
    </div>
    </div>

  </div>
</div>
{/* About */}

{/* projects */}
<div className="hero min-h-screen bg-zinc-200" id="projects">
  <div className="hero-content text-center">
    <div className="max-w-2xl space-y-10">
      <h1 className="text-5xl font-bold mt-[80px]">PROJECTS</h1>

      <div className="space-x-[70px] space-y-[20px]">
      <div className="chat chat-start">
           <div className="chat-bubble">Fine,Where is your Source code.</div>
       </div>
       <div className="chat chat-end">
          <div className="chat-bubble"><a href="https://github.com/mr-saravanakumar">Just Click here!</a></div>
      </div>
      </div>
     <div>
     
     {
      projects.map((project) =>{
        return  <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical" key={project.id}>
        <Slide direction="left">
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-[#416D19]"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-sans  text-[#201658]">{project.name}</time>
            {
              project.tech.map((t)=>{
                return <div className="text-lg  text-[#76453B]" key={t}>{t}</div>
              })
            }
          </div>
          <hr/>
        </li>
        </Slide>
  <Slide direction="right">
        <li>
          <div className="timeline-middle">
          <a href={project.link} className="font-sans text-[#201658] text-center"><BsGithub size={30}/></a>

          </div>
          <div className="timeline-end mb-10">
             <div className="text-slate-400">{project.stack}</div>
          </div>
          <hr/>
        </li>
  </Slide>
      </ul>
      })
     }
      
     </div>
    </div>
  </div>
</div>
{/* projects */}

{/* achievement */}
<div className="hero min-h-screen bg-zinc-300" id="achievement">
  <div className="hero-content text-center">
    <div className="max-w-lg mt-[100px]">
    <Slide direction="up">
      <h1 className="text-5xl font-bold">Achievement</h1>
    </Slide>
    <Slide direction="up">
      <p className="py-6 text-red-900 text-xl">I have an experience in working with real time project which we have develop an web application for <span className="text-red-600">Mannit</span> company using next js,tailwind css,express js,node js and mongodb </p>
    </Slide>
    </div>
  </div>
</div>

{/* footer */}
<footer className="footer flex justify-center items-center p-4 bg-neutral text-neutral-content">
  <aside className="items-center flex justify-center">
    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
    <p>@Saravanakumar...</p>
  </aside> 
</footer>

    </main>
  );
}
