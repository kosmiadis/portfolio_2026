import { useCallback, type RefObject } from "react";
import { useTheme } from "../../store/theme"
import { CiLight } from "react-icons/ci";
import { data } from "../../data";
import Button from "../ui/button";

function TriggerTheme () {
    const { setTheme, theme } = useTheme();

    const toggleTheme = useCallback(() => {
        setTheme(theme == 'dark' ? 'light' : 'dark')
    }, [theme])

    return <button onClick={toggleTheme} className="hover:cursor-pointer appearance-none">
        <CiLight size={28} color={'#4a4e69'}/>
    </button>
}   

export default function Header ({ aboutRef, resumeRef, contactRef }: { aboutRef: RefObject<HTMLDivElement | null>, resumeRef: RefObject<HTMLDivElement | null>, contactRef: RefObject<HTMLDivElement | null>}) {
    const { about, resume, contact }  = data.header.navbar.links;
    return <header className="sticky z-99 top-0 bg-bg flex justify-between gap-4 items-center py-4 px-4 lg:px-8">
        <h2 className="text-foreground font-bold hover:cursor-crosshair">Vagelis Kosmiadis</h2>
        <div className="flex items-center gap-4">
            <nav className="flex items-center gap-4">
                <Button onClick={() => window.scrollTo({ top: aboutRef!.current!.offsetTop - 80, behavior: 'smooth' })} variant="link">{about.text}</Button>
                <Button onClick={() => window.scrollTo({ top: resumeRef!.current!.offsetTop - 80, behavior: 'smooth' })} variant="link">{resume.text}</Button>
                <Button onClick={() => window.scrollTo({ top: contactRef!.current!.offsetTop - 80, behavior: 'smooth' })} variant="link">{contact.text}</Button>
            </nav>
            <TriggerTheme />
        </div>
    </header>
}