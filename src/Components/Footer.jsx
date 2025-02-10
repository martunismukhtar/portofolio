const Footer=()=>{
    return (
        <div className="bg-[#1c1d25] text-white px-0 py-[8%] text-center">
            <div className="flex flex-col items-center justify-center">
                <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                        <rect width="100" height="100" fill="none" />
                        <path d="M20 80 L20 20 L50 50 L80 20 L80 80 L65 80 L65 40 L50 55 L35 40 L35 80 Z" fill="#007BFF" />
                    </svg>
                </div>
                
                <ul className="flex gap-16">
                    <li>
                        <a className="text-white text-xl font-medium relative before:content-[''] after:content-[''] before:absolute after:absolute before:bottom-0 after:bottom-0 before:right-0 after:right-0 before:w-0 after:w-0 before:left-auto after:left-auto before:h-[3px] after:h-[3px] before:bg-[#235aa6] after:bg-[#f25757] before:transition-all after:transition-all before:duration-[250ms] before:delay-[150ms] after:duration-[250ms] before:ease-[cubic-bezier(0.694,0.048,0.335,1)] after:ease-[cubic-bezier(0.694,0.048,0.335,1)] hover:before:w-full hover:after:w-full hover:before:left-0 hover:after:left-0" href="#" target="_blank" rel="noopener">Email</a>
                    </li>
                    <li>
                        <a className="text-white text-xl font-medium relative before:content-[''] after:content-[''] before:absolute after:absolute before:bottom-0 after:bottom-0 before:right-0 after:right-0 before:w-0 after:w-0 before:left-auto after:left-auto before:h-[3px] after:h-[3px] before:bg-[#235aa6] after:bg-[#f25757] before:transition-all after:transition-all before:duration-[250ms] before:delay-[150ms] after:duration-[250ms] before:ease-[cubic-bezier(0.694,0.048,0.335,1)] after:ease-[cubic-bezier(0.694,0.048,0.335,1)] hover:before:w-full hover:after:w-full hover:before:left-0 hover:after:left-0" href="https://www.linkedin.com/in/martunis-mukhtar-64718297/" target="_blank" rel="noopener">Linkdin</a>
                    </li>
                    <li>
                        <a className="text-white text-xl font-medium relative before:content-[''] after:content-[''] before:absolute after:absolute before:bottom-0 after:bottom-0 before:right-0 after:right-0 before:w-0 after:w-0 before:left-auto after:left-auto before:h-[3px] after:h-[3px] before:bg-[#235aa6] after:bg-[#f25757] before:transition-all after:transition-all before:duration-[250ms] before:delay-[150ms] after:duration-[250ms] before:ease-[cubic-bezier(0.694,0.048,0.335,1)] after:ease-[cubic-bezier(0.694,0.048,0.335,1)] hover:before:w-full hover:after:w-full hover:before:left-0 hover:after:left-0" href="https://github.com/martunismukhtar" target="_blank" rel="noopener">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
