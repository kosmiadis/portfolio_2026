import { data } from "../data"

function HeroSocial () {
    const { social } = data.hero;
    return <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Find me on</h2>
        <ul className="flex items-center flex-wrap gap-8">
            {social.map(s => <li className="hover:underline hover:cursor-pointer">
                <a href={s.link} target={s.target} className="flex gap-1 items-center"> 
                    {s.icon}
                    {s.name}
                </a>
            </li>)}
        </ul>
    </div>
}

export default function Hero () {

    const { title, content } = data.hero;
    
    return <article className="min-h-[60vh] mt-[20%] flex flex-col gap-6">
        <h2 className=" font-mono font-bold text-3xl text-wrap">Hey, I am <span className="text-nowrap text-violet-500">Vagelis Kosmiadis</span></h2>
        <div className="flex flex-col gap-1">
            <h1 className=" font-semibold italic">{title}</h1>
            <p className="">{content}</p>
        </div>

        <HeroSocial />
    </article>
}