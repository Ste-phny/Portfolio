import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import Designer from "../assets/images/Designer.png";

function Nav() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={Designer} alt="#" />
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
