import { data } from "../data"

export default function Contact ( ){
    const { title, subtitle, email, location } = data.contact;

    return <article className="min-h-75 flex flex-col gap-2">
        <h2 className="font-semibold text-4xl">{title}</h2>    
        <div className="mt-2 flex flex-col gap-4">
            <h2 className="text-xl">{subtitle}</h2>
            <div className="flex flex-col gap-4">
                <a href="mailto:vageliskosmiadis@gmail.com" className="underline"><p className="text-xl">{email}</p></a>
                <p className="text-xl italic text-accent">{location}</p>
            </div>
        </div>
    </article>
}