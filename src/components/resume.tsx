import { data } from "../data"

export default function Resume () {
    const { title, content, skills } = data.resume;
    
    return <article className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-2xl">{title}</h2>
            <p>{content}</p>
        </div>

        <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-2xl">{skills.title}</h2>
            
            <ul className="flex items-center flex-wrap gap-2">
                {skills.skills_list.map(skill => <li key={skill.name} className="flex items-center gap-2">
                    {skill.icon}
                    {skill.name}
                </li>)}
                
            </ul>
        </div>
    </article>
}