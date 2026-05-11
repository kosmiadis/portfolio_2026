import { twMerge } from "tailwind-merge";
import type { ThemeType } from "../../store/theme";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Hero from "../hero";
import Resume from "../resume";

type CoreLayoutPropsType = {
    theme: ThemeType;
}

export default function CoreLayout ({ theme }: CoreLayoutPropsType) {   

    return <div className={twMerge('w-full min-h-screen dark:bg-bg duration-100 ', theme)}> 
        <Header/>
        <main className="px-4 flex-1 flex flex-col max-w-175 text-foreground leading-7 mx-auto">
            <Hero />
            <Resume />

        </main>
        <Footer />
    </div>
}