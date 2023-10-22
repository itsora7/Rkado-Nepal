import React from "react";
//import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

//link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-1 lg:bottom-9 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center text-white"
          >
            <BiHomeAlt />
          </Link>

          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center text-white"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="aboutme"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center text-white"
          >
            <BiUser />
          </Link>

          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center text-white"
          >
            <BsChatSquare />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center text-white"
          >
            <BsClipboardData />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
