import { data, type ProjectType } from "../data"

function ProjectPreview ({ project }: {project: ProjectType}) {
    const { description, links,  title, image, tools } = project;
    const { github, live_demo } = links;

    return <article className="flex flex-col gap-4 w-full">
        {image && <div>
            <img src={'/'+image}/>
        </div>}
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <a href={github} className="hover:cursor-pointer hover:text-violet-500" target="_blank"><h3 className=" text-xl font-semibold">{title}</h3></a>
                {live_demo && <span className="text-foreground text-sm font-medium">Live at <a href={live_demo} target="_blank" className="hover:text-accent">{live_demo}</a></span>}
            </div>
            <p className="text-foreground text-lg">{description}</p>

        </div>
        <div className="flex flex-col gap-2">
            <p className="underline">Tools used</p>
            <ul className="flex flex-wrap items-center gap-4">
                {tools?.map(tool => <li key={tool.id} className="flex items-center gap-2">
                    {tool.icon}
                    <span className="flex-nowrap">{tool.name}</span>
                </li>)}
            </ul>
        </div>
    </article>

}

function ProjectsListPreview () {
    const { projectsList } = data.projects;

    return <section>

        <ul className="flex flex-col gap-8">
            {projectsList.map(project => <li key={project.id}>
                <ProjectPreview project={project}/>
            </li>)}
        </ul>
    </section>
}

export default function Projects () {

    const { title } = data.projects;

    return <article className="flex flex-col gap-4 px-4">
        
        <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-xl">{title}</h2>
            <div>
                <ProjectsListPreview />
            </div>        
        </div>
        
    </article>
}