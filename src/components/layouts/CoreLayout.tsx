import { twMerge } from "tailwind-merge";
import type { ThemeType } from "../../store/theme";
import Footer from "../layout/footer";
import Header from "../layout/header";

type CoreLayoutPropsType = {
    theme: ThemeType;
}

export default function CoreLayout ({ theme }: CoreLayoutPropsType) {   

    return <div className={twMerge('w-full min-h-screen dark:bg-black duration-100 ', theme)}> 
        <Header/>
        <main className="">

        </main>
        <Footer />
    </div>
}