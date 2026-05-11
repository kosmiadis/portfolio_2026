import { twMerge } from "tailwind-merge";
import type { ThemeType } from "../../store/theme";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Hero from "../hero";
import Resume from "../resume";
import WorkHistory from "../work-history";
import { useRef } from "react";
import Contact from "../contact";

type CoreLayoutPropsType = {
    theme: ThemeType;
}

export default function CoreLayout ({ theme }: CoreLayoutPropsType) {   

    const aboutRef = useRef<HTMLDivElement | null>(null);
    const resumeRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    return <div className={twMerge('w-full min-h-screen bg-bg ', theme)}> 
        <Header aboutRef={aboutRef} resumeRef={resumeRef} contactRef={contactRef} />
        <main className="px-6 flex-1 flex flex-col max-w-175 text-foreground leading-7 gap-20 mx-auto">
            <div ref={aboutRef}>
                <Hero />
            </div>
            <div ref={resumeRef}>
                <Resume />
            </div>
            <WorkHistory />
            <div ref={contactRef}>
                <Contact />
            </div>
        </main>
        <Footer />
    </div>
}