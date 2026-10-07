import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";

function Nav() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src="src/assets/images/logo.jpeg" alt="#" />
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
