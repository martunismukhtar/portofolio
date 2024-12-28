import experiences from "../../Konstanta/experienceData";

const Pengalaman=()=>{
    return(
        <div id="pengalaman" className="bg-[#fffaf3] pt-[4%] px-[2%] sm:px-[15%] flex flex-col">
            <h4 className="font-medium p-3">Experiences</h4>
            {experiences.map((experience, index) => (
                <div key={index} className="flex flex-row p-4 gap-16 border-b-[1px] border-[#e5e7eb]">
                    <span className="p-2 my-2">{experience.year}</span>
                    <div className="p-2 flex flex-col">
                        <div className="flex flex-row gap-2 my-2">
                        <span className="text-[#000000] font-semibold">{experience.position}</span>
                        <a href={experience.link} className="flex flex-row justify-center items-center">
                            <span>{experience.company}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                        </a>
                        </div>
                        <p>{experience.description}</p>
                        <ul className="list-none flex gap-5 my-2">
                            {experience.techs.map((tech, index) => (
                                <li key={index} className="rounded-full bg-primary text-white p-[12px] text-center self-center">{tech}</li>
                            ))}                            
                        </ul>
                    </div>
                </div>                                                    
            ))}            
        </div>
    )
}
export default Pengalaman;