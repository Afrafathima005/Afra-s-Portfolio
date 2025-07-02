import "../styles/global.css";
import aiLabImg from "../images/3.png";
import shopliftingImg from "../images/5.png";

import img from "../images/6.png";
import img2 from "../images/7.png";
import expenseVideo from "../images/e.mp4";

import React from 'react';
const projectsData = [
   {
  title: "SkillBoost",
  description: "AI Career Companion Platform",
  details: "An AI-driven career support platform integrating resume generation, ATS matching, AI mock interviews with real-time feedback, cover letter generation, skill gap analysis, and job recommendations to help users optimize their professional growth.",
  image: img2,  // replace with your actual image import
  github: "https://github.com/Afrafathima005/AI-Carreer-Companion", // adjust if you have the repo link
  demo: "https://ai-carreer-companion-h6ux.vercel.app/",  // replace with your demo video or live link
},

  
  { 
    
  title: "Startup Buddy ",
  description: "AI Chatbot for Startup Founders",
  details: "An AI chatbot for startup founders, powered by LLMs with real-time knowledge, long-term memory via Supabase, and semantic search through Jina API. Delivers instant, context-aware advice on funding, legal, marketing, and scaling, with live data and past chat recall..",
  image: img,  
  github: "https://github.com/Afrafathima005/startup_buddy",
  demo: "https://startup-buddy-59t4.vercel.app/"
  },
  { 
    title: "Expense Tracker", 
    description: "Track your daily expenses",
    details: "A simple and effective way to monitor expenses, categorize transactions, and analyze spending patterns over time.",
    image: shopliftingImg, 
    github: "https://github.com/Afrafathima005/Expense-Tracker", 
    demo: expenseVideo, 
  },
   { 
    title: "Yieldify", 
    description: "AI-powered Smart Agriculture",
    details: "An innovative solution that leverages AI to optimize farming processes, improving efficiency and sustainability.",
    image: aiLabImg, 
    github: "https://github.com/Harish24-10-2005/Yieldify", 
    
  },
  { 
    title: "Virtual Event Planner", 
    description: "Virtual Event Planner is a web application built  for organizing and managing virtual events.",
    details: "A web-based solution to create, customize, and manage virtual events with RSVP tracking and guest invitations.",
    image: img2, 
    github: "https://github.com/Afrafathima005/virtual-event-planner", 
    demo: "https://virtual-event-planner-7v3q.vercel.app/" 
  },
  // { 
  //   title: "AI Career Companion ", 
  //   description: "Book your doctor appointment.",
  //   details: "A seamless online booking system for patients to schedule medical appointments with ease and convenience.",
  //   image: learningImg, 
  //   github: "#", 
  //   demo: "#" 
  // },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.github} className="project-button github" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={project.demo} className="project-button demo" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
            <p className="project-details">{project.details}</p> {/* ✅ Full project details here */}
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Projects;
