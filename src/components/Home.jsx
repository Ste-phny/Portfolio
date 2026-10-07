import React from "react";
import { IoHandLeftOutline } from "react-icons/io5";
import { IoMdArrowRoundDown } from "react-icons/io";
import profile from "../assets/images/profile.jpg";
function Home() {
  return (
    <>
      <div className="header">
        <div className="left">
          <h5>
            Hello <IoHandLeftOutline />,
          </h5>
          <h1>
            My Name is Chukwuneke Stephanie & <br /> I'm a Front-End Developer
          </h1>
          <p>
            I transform ideas and desings into functional digital <br />{" "}
            experiences while building projects that are visually appealing and
            easy to use.
          </p>
          <button>
            Download cv <IoMdArrowRoundDown />
          </button>
        </div>
        <div className="right">
          <img src={profile} alt="#" />
        </div>
      </div>
    </>
  );
}

export default Home;
