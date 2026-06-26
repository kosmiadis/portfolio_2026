import type { ReactNode } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaPython 
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, 
  SiExpress, SiRedux, SiVite,
  SiNetlify,
  SiVercel, SiCplusplus, SiGnubash
} from 'react-icons/si';
import { DiVim } from 'react-icons/di';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface NavLink {
    text: string;
    to: string;
}

interface SocialLink {
    name: string;
    link: string;
    target: string;
    icon: any;
}

interface Skill {
    name: string;
    icon: ReactNode;
}

interface SkillsSection {
    title: string;
    skills_list: Skill[];
}


export interface WorkEntry {
    work_title: string;
    location: string;
    period: string; 
    live_demo?: string;
    highlights: string[];
}

interface WorkSection {
    title: string;
    description: string;
    work_history: WorkEntry[];
}


export type ProjectType = {
    id: number;
    title: string;
    description: string;
    links: {
        github: string;
        live_demo?: string;
    }
    image?: string; //path to public folder,
    tools?: { id: number, name: string, icon: ReactNode }[];
}

interface ProjectsI {
    title: string;
    projectsList: ProjectType[];
}

export interface DataI {
    header: {
        navbar: {
            links: {
                resume: NavLink;
                contact: NavLink;
                about: NavLink;
            };
        };
    };
    hero: {
        title: string;
        content: string;
        social: SocialLink[];
    };
    resume: {
        title: string;
        content: string;
        skills: SkillsSection;
    };
    contact: {
        title: string;
        subtitle: string;
        email: string;
        location: string;
    };

    work: WorkSection;

    projects: ProjectsI;
}


export const data: DataI = {
    header: {
        
        navbar: {
            links: {
                resume: { text: "RESUME", to: '#resume' },
                contact: { text: "CONTACT", to: '#contact' },
                about: { text: "ABOUT", to: '#about' },

            }
        }
    },
    hero: {
        title: "CS Student @ AUTh | Freelance Full-Stack Developer",
        content: "I am a Computer Science undergraduate at the Aristotle University of Thessaloniki, with a keen interest in Software Engineering and Web Development. Currently in my 2nd semester, I balance my studies with some freelance projects, where I build scalable web applications for diverse clients.",
        social: [
            { icon: <FaGithub />,  name: 'GitHub', link: 'https://github.com/kosmiadis', target: "_blank" },
            { icon: <FaLinkedin color="#0A66C2" />, name: 'LinkedIn', link: 'https://www.linkedin.com/in/βαγγέλης-κοσμιάδης-72a6a9360/', target: "_blank" },
        ]
    },
    resume: {
        title: "My Resume / CV",
        // Ένα μικρό context για το CV σου
        content: "Combining academic theory from Aristotle University with practical experience in the industry. Focused on building clean, maintainable code and solving real-world problems.",
        skills: {
            title: "Tools",
            skills_list: [
                { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
                { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
                { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
                { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
                { name: "React", icon: <FaReact color="#61DAFB" /> },
                { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
                { name: "Redux", icon: <SiRedux color="#764ABC" /> },
                { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
                { name: "C++", icon: <SiCplusplus color="#3178C6" /> },
                { name: "Express", icon: <SiExpress color="#000000" /> },
                { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
                { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
                { name: "Git", icon: <FaGitAlt color="#F05032" /> },
                { name: "Docker", icon: <FaDocker color="#2496ED" /> },
                { name: "Vite", icon: <SiVite color="#646CFF" /> },
                { name: "Python", icon: <FaPython color="#3776AB" /> },
                { name: "Vercel", icon: <SiVercel color="#000000" /> },
                { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
        	{ name: "Bash", icon: <SiGnubash /> },
		{ name: "Vim", icon: <DiVim /> },        
            ]
        }
    },
    work: {
        title: "Professional Experience",
        description: "A track record of building production-ready applications and collaborating with agile teams.",
        work_history: [
            {
                work_title: "Freelance website creation & Social Media Management for local business",
                live_demo: 'https://chalk59.gr',
                location: "Thessaloniki (Remote)",
                period: "2024",
                highlights: [
                    "Developed a fully responsive website for a local bussiness",
                    "Created content and managed business's social media accounts bringing over 1 million in traffic"
                ]
            },
            
        ]
    },
    projects: {
        title: "View some of my Projects",
        projectsList: [
            {
                id: 1,
                title: "Naive Bayes Email Classification (ML Classification Algorithm)",
                description: "Hand written from scratch implementation of the Naive Bayes Classification Machine Learning Algorithm in C++ using Bayes Theorem in Probabilities. Aims to combine academic knowledge with coding skills.",
                links: {
                    github: "https://github.com/kosmiadis/Naive-Bayes-Email-Classification"
                },
                tools: [
                    { id: 1, name: "C++", icon: <SiCplusplus color="#3178C6" /> }
                ]
            },  
            {
                id: 2,
                title: "Email Classification Web Application (Using Naive Bayes Email Classification Repo)",
                description: "This projects aim to connect FullStack Web Development with Next.js and Machine Learning code written in C++ and combine them. Using Docker for the infrastructure and running C++ executable via Child Processes in Node.js",
                links: {
                    github: "https://github.com/kosmiadis/Email-Classifier"
                },
                tools: [
                    { id: 1, name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
                    { id: 2, name: "Typescript", icon: <SiTypescript color="#3178C6" /> },
                    { id: 3, name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
                    { id: 4, name: "C++", icon: <SiCplusplus color="#3178C6" /> },
                ]
            }, 
            {
                id: 3,
                title: "Live Telemetry Vehicle Dashboard via WebSockets and Custom Protocol",
                description: "Live Telemetry Vehicle Dashboard, built with Next.js and Node.js (WebSockets & Vehicle performance simulation). The application connects to a live data stream via a websocket and displays live performance data and analytis such as live speed, batery temperature, average rpm etc...",
                links: {
                    github: "https://github.com/kosmiadis/Live-Telemetry"
                },
                tools: [
                    { id: 1, name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
                    { id: 2, name: "Typescript", icon: <SiTypescript color="#3178C6" /> },
                    { id: 3, name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
                    { id: 4, name: "Node.js", icon: <FaNodeJs color="#339933" />},
                    { id: 5, name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
                    { id: 6, name: "Docker", icon: <FaDocker color="#2496ED" /> },
                ]
            }, 
        ], 
    },
    contact: {
        title: "Get In Touch",
        subtitle: "Currently open to freelance projects and networking opportunities. Send me a message freely at my personal email down below",
        email: "vageliskosmiadis@gmail.com", 
        location: "Thessaloniki, Greece"
    },
}
