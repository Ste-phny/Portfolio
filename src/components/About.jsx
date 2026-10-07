import React from "react";
import { MdArrowRight } from "react-icons/md";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <div className="left">
            <h3>About Me</h3>
            <p>
              I'm Stephanie Chukwuneke, a Front-End developer focused on
              crafting visually <br /> appealing and user friendly digital
              experiences. <br />I am constantly learning and improving my
              ability to create websites that look good and work
              seamlessly.
            </p>
          </div>
          <div className="right">
            <h3>Education</h3>
            <h4>Bachelor of science in computer science (CS)</h4>
            <ul>
              <ol>
                <MdArrowRight /> Landmark University,Kwara State, Nigeria
              </ol>
              <ol>
                <MdArrowRight /> Passing Year 2027
              </ol>
            </ul>
            <h4>High School Certificate (HSC)</h4>
            <ul>
              <ol>
                <MdArrowRight /> Bishop Okay Spiritan Secondary School (BOSSS)
              </ol>
              <ol>
                <MdArrowRight /> Passing Year 2023
              </ol>
            </ul>
            <h4>Internship Experiences</h4>
            <ul>
              <ol>
                <MdArrowRight /> Total Energies Ltd (October, 2025)
              </ol>
              <ol>
                <MdArrowRight /> Mel Technologies Limited (September, 2025)
              </ol>
              <ol>
                <MdArrowRight /> Harvoxx Tech Hub (August - October,2026)
              </ol>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
