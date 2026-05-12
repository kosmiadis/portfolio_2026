import { data, type WorkEntry } from "../data"

function WorkHistoryHighlight ({ workHistoryTimelineHighlight }: {workHistoryTimelineHighlight: WorkEntry} ) {
    const { work_title, location, period, highlights, live_demo } = workHistoryTimelineHighlight;
    
    return <div className="border-l border-accent relative">
        <span className="w-4 h-4 bg-violet-500 absolute rounded-full left-[-8.5px] top-1"></span>
        <div className="pl-10 pb-16">
            
            <h3 className="font-semibold text-xl">{work_title}</h3>
            
            <div className="flex items-center gap-4">
                <p className="underline">{location}</p>
                <p className="text-sm text-accent">{period}</p>
            </div>

            <ul className="mt-4 flex flex-col gap-2">
                {highlights.map(highlight => <li>{highlight}</li>)}
            </ul>

            {live_demo && <p className="text-accent mt-2 hover:underline">Live demo at <a href={live_demo} target="group">{live_demo}</a></p>}
        </div>
    </div>
}

function WorkHistoryTimeline ( ) {
    const { work_history } = data.work;
    return <div className="mt-10 flex flex-col">
        {work_history.map(work => <WorkHistoryHighlight key={work.work_title} workHistoryTimelineHighlight={work}/>)}
    </div>
}


export default function WorkHistory () {
    const { title, description } = data.work;
    
    return <article className="flex flex-col gap-4">
        
        <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-2xl">{title}</h2>
            <p>{description}</p>
        </div>

        <WorkHistoryTimeline />
    </article>
}