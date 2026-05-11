import { useCallback } from "react";
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

export default function Header () {
    return <header className="sticky top-0 bg-bg/95 flex justify-between gap-4 items-center py-4 px-8">
        <h2 className="text-foreground font-bold">Vagelis Kosmiadis</h2>
        <div className="flex items-center gap-4">
            <nav>
                <ul className="flex items-center gap-4">
                    {data.header.navbar.links.map((link) => <li key={link.to}><Button variant="link">{link.text}</Button></li>)}
                </ul>
            </nav>
            <TriggerTheme />
        </div>
    </header>
}