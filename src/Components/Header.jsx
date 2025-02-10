import React from "react";

const Header = () => {
  const [ishovered, setHovered] = React.useState(false);
  const [isopen, setOpen] = React.useState(false);

  const scrollToElement = (id) => {
    setOpen(false);
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full">
      <div className="w-full px-10 py-4 border-b flex justify-end cursor-pointer">
        <div
          className="flex flex-col items-center justify-center w-10 h-10  space-y-1 bg-gray-300 hover:bg-gray-300 focus:outline-none"
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
          onClick={() => setOpen(!isopen)}
        >
          <span
            className={`block w-8 h-1 bg-gray-800 transition-transform duration-300 origin-center ${
              ishovered ? "rotate-[48deg] -translate-x-[.6rem]" : ""
            } `}
          ></span>
          <span
            className={`${
              ishovered ? "hidden" : "block"
            } w-8 h-1 bg-gray-800 transition-opacity duration-300`}
          ></span>
          <span
            className={`block w-8 h-1 bg-gray-800 transition-transform duration-300 origin-center ${
              ishovered
                ? "rotate-[-52deg] translate-x-[.6rem] -translate-y-2"
                : ""
            }`}
          ></span>
        </div>
      </div>
      {/* panel menu  */}
      <div
        className={` transition-all duration-300 ease-in-out ${
          isopen ? "h-full visible opacity-100" : "h-0 invisible opacity-0"
        } fixed top-0 left-0 w-full  bg-white z-10`}
      >
        <div className="flex justify-end items-end p-6 cursor-pointer">
          <svg onClick={() => setOpen(!isopen)}
            width="64px"
            height="64px"
            viewBox="-0.5 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M3 21.32L21 3.32001"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M3 3.32001L21 21.32"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-start sm:justify-center h-full">
          <ul className="flex flex-col items-center justify-items-start pt-24 pb-32">
            <li className="p-2 text-3xl">
                <button onClick={() => scrollToElement("deskripsi")}>Home</button>
            </li>
            <li className="p-2 text-3xl">
                <button onClick={() => scrollToElement("pengalaman")}>Experince</button>
            </li>
            <li className="p-2 text-3xl">
                <button onClick={() => scrollToElement("skills")}>Skills</button>
            </li>
          </ul>
          <ul className="flex gap-16">
            <li>
              <a
                className="text-[#000000] text-xl font-medium relative before:content-[''] after:content-[''] before:absolute after:absolute before:bottom-0 after:bottom-0 before:right-0 after:right-0 before:w-0 after:w-0 before:left-auto after:left-auto before:h-[3px] after:h-[3px] before:bg-[#235aa6] after:bg-[#f25757] before:transition-all after:transition-all before:duration-[250ms] before:delay-[150ms] after:duration-[250ms] before:ease-[cubic-bezier(0.694,0.048,0.335,1)] after:ease-[cubic-bezier(0.694,0.048,0.335,1)] hover:before:w-full hover:after:w-full hover:before:left-0 hover:after:left-0"
                href="#"
                target="_blank"
                rel="noopener"
              >
                Email
              </a>
            </li>
            <li>
              <a
                className="text-[#000000] text-xl font-medium relative before:content-[''] after:content-[''] before:absolute after:absolute before:bottom-0 after:bottom-0 before:right-0 after:right-0 before:w-0 after:w-0 before:left-auto after:left-auto before:h-[3px] after:h-[3px] before:bg-[#235aa6] after:bg-[#f25757] before:transition-all after:transition-all before:duration-[250ms] before:delay-[150ms] after:duration-[250ms] before:ease-[cubic-bezier(0.694,0.048,0.335,1)] after:ease-[cubic-bezier(0.694,0.048,0.335,1)] hover:before:w-full hover:after:w-full hover:before:left-0 hover:after:left-0"
                href="https://www.linkedin.com/in/martunis-mukhtar-64718297/"
                target="_blank"
                rel="noopener"
              >
                Linkdin
              </a>
            </li>
            <li>
              <a
                className="text-[#000000] text-xl font-medium relative before:content-[''] after:content-[''] before:absolute after:absolute before:bottom-0 after:bottom-0 before:right-0 after:right-0 before:w-0 after:w-0 before:left-auto after:left-auto before:h-[3px] after:h-[3px] before:bg-[#235aa6] after:bg-[#f25757] before:transition-all after:transition-all before:duration-[250ms] before:delay-[150ms] after:duration-[250ms] before:ease-[cubic-bezier(0.694,0.048,0.335,1)] after:ease-[cubic-bezier(0.694,0.048,0.335,1)] hover:before:w-full hover:after:w-full hover:before:left-0 hover:after:left-0"
                href="https://github.com/martunismukhtar"
                target="_blank"
                rel="noopener"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
