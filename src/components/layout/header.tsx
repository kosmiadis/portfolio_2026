import { useCallback } from "react";
import { useTheme } from "../../store/theme"
import { CiLight } from "react-icons/ci";

function TriggerTheme () {
    const { setTheme, theme } = useTheme();

    const toggleTheme = useCallback(() => {
        setTheme(theme == 'dark' ? 'light' : 'dark')
    }, [theme])

    return <button onClick={toggleTheme} className="appearance-none">
        <CiLight size={32} color={theme == 'dark' ? 'white' : 'black'}/>
    </button>
}   

export default function Header () {
    return <header>
        <TriggerTheme />
    </header>
}