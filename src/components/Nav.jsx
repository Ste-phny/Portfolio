import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import profile from "../assets/images/logo.jpeg";

function Nav() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="#" />
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
