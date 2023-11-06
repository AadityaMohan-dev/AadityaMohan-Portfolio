import React from "react";
import "./Skills.css";
import { gsap } from "gsap/gsap-core";
function Skills() {
  // gsap.to("#p-nav",{
  //   opacity:0,
  // })
  return (
    <>
      <div id="skills-container">
        <div class="marquee-about">
          <div class="marquee-about-inner">
            <span>
              <div>eat ☻ sleep ☻ code ☻ repeat ☻</div>
            </span>
          </div>
        </div>

        <div id="p-nav">
          <div id="icon ">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/down-right.png"
              alt="down-right"
            />
          </div>
          <div id="head">
            <h1>Project</h1>
          </div>
        </div>
        <div id="data-p">
          <div id="table">
            <div id="timeline">
              <h1>timeline</h1>
              <h3>2023</h3>
            </div>
            <div id="dicipline">
              <h1>dicipline</h1>
              <h3>web Developement</h3>
              <h3>backend</h3>
              <h3>ui design</h3>
              <h3>database</h3>
            </div>
            <div id="tools">
              <h1>tools</h1>
              <h3>java</h3>
              <h3>spring</h3>
              <h3>Angular</h3>
              <h3>react</h3>
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>Bootstrap</h3>
              <h3>Tailwindcss</h3>
              <h3>mysql</h3>
            </div>

            <div id="industry">
              <h1>industry</h1>
              <div id="industry-data">
                <h3>#webapp</h3>
                <h3>#sass</h3>
                <h3>#tech</h3>
              </div>
            </div>
          </div>
          <div id="projects-grid">
            <div id="projects">
              <div id="p-1" className="flex justify-between">
                <a href="">wheel chair management</a>
                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/right.png" alt="right"/>              </div>
              <div id="p-2" className="flex justify-between">
                <a href="">nike clone</a>
                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/right.png" alt="right"/>              </div>
              <div id="p-3" className="flex justify-between">
                <a href="">e-commerce website</a>
                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/right.png" alt="right"/>              </div>
              <div id="p-4" className="flex justify-between">
                <a href="">portfolio website</a>
                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/right.png" alt="right"/>              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
