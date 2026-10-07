import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import logo2 from "../assets/images/logo2.png";

function Nav() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={logo2} alt="#" />
        </div>
        <p>Front-End Developer</p>
        <button>
          Download cv <IoMdArrowRoundDown />
        </button>
      </div>
    </>
  );
}

export default Nav;
