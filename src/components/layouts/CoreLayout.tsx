import { twMerge } from "tailwind-merge";
import type { ThemeType } from "../../store/theme";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Hero from "../hero";
import Resume from "../resume";
import WorkHistory from "../work-history";
import { useEffect, useRef } from "react";
import Contact from "../contact";
import { animate } from "animejs";

type CoreLayoutPropsType = {
    theme: ThemeType;
}

export default function CoreLayout ({ theme }: CoreLayoutPropsType) {   

    const aboutRef = useRef<HTMLDivElement | null>(null);
    const resumeRef = useRef<HTMLDivElement | null>(null);
    const workHistoryRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        animate('.core-layout', {
            opacity: [0, 1],
            duration: 400
        })
    }, [])

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animate('.about', {
              translateY: [100, 0],
              opacity: [0, 1],
              duration: 800,
              easing: "easeOutExpo",
            });
            observer.unobserve(entry.target); // animate only once
          }
        },
        { threshold: 0.5 } // trigger when 20% visible
      );

      if (aboutRef.current) observer.observe(aboutRef.current);

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animate('.resume', {
              translateY: [100, 0],
              opacity: [0, 1],
              duration: 800,
              easing: "easeOutExpo",
            });
            observer.unobserve(entry.target); // animate only once
          }
        },
        { threshold: 0.5 } // trigger when 20% visible
      );

      if (resumeRef.current) observer.observe(resumeRef.current);

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animate('.contact', {
              translateY: [100, 0],
              opacity: [0, 1],
              duration: 800,
              easing: "easeOutExpo",
            });
            observer.unobserve(entry.target); // animate only once
          }
        },
        { threshold: 0.5 } // trigger when 20% visible
      );

      if (contactRef.current) observer.observe(contactRef.current);

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animate('.work-history', {
              translateY: [100, 0],
              opacity: [0, 1],
              duration: 800,
              easing: "easeOutExpo",
            });
            observer.unobserve(entry.target); // animate only once
          }
        },
        { threshold: 0.5 } // trigger when 20% visible
      );

      if (workHistoryRef.current) observer.observe(workHistoryRef.current);

      return () => observer.disconnect();
    }, []);


    return <div className={twMerge('w-full min-h-screen bg-bg core-layout', theme)}> 
        <Header aboutRef={aboutRef} resumeRef={resumeRef} contactRef={contactRef} />
        <main className="px-6 flex-1 flex flex-col max-w-175 text-foreground leading-7 gap-20 mx-auto">
            
            <div className="about opacity-0" ref={aboutRef}>
                <Hero />
            </div>

            <div className="resume opacity-0" ref={resumeRef}>
                <Resume />
            </div>

            <div className="work-history opacity-0" ref={workHistoryRef}>
                <WorkHistory />
            </div>

            <div className="contact opacity-0" ref={contactRef}>
                <Contact />
            </div>

        </main>
        <Footer />
    </div>
}