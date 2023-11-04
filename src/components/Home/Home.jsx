import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Home.css";
import { gsap } from "gsap";
 
function Home() {
  // const [started, setStarted] = useState(false);

  // function reMountComp(){
  //   setStarted((prev) => !prev);
  //
  useEffect(() => {
    gsap.from("#nav", {
      duration: 0.5,
      delay: 0.1,
      opacity: 0,
      y: -100,
    });
    gsap.from("#scroll-btn", {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
    gsap.from("#year-btn", {
      x: 50,
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
    gsap.from("#scroll-btn", {
      y: 40,
      repeat: -1,
      yoyo: true,
      duration: 1,
      delay: 0.5,
      stagger: true,
    });

    // g.kill();
    // g = gsap.set("#nav",{
    //   y:0,
    //   opacity:1
  });

  return (
    <>
      <div id="home-container">
        <div id="main">
          <div id="nav" className="mt-6">
            <h1>Portfolio</h1>
            <h1>creative mind create future.</h1>
            <div>
              <img
                src="https://cdn.dribbble.com/users/1048426/screenshots/7724516/media/abd03d54bbc5328896e17b48222ef60f.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="marquee">
          <div class="marquee--inner">
            <span>
              <div>Aaditya ☻ Mohan ☻ </div>
            </span>
            <span>
              <div>Aaditya ☻ Mohan ☻ </div>
            </span>
          </div>
        </div>
        <div className="btn-container flex justify-between p-12">
          <div id="scroll-btn" className="h-20">
            <h1>scroll down 👇</h1>
          </div>
          <div id="year-btn" className="h-20">
            <h1>2023 ©</h1>
          </div>
        </div>
        <div className="hero-container flex justify-center">
          <div id="hero">
            <img
              src="https://assets.website-files.com/637853f6f3d6aacb22fa97db/6392099811d7727f54b99e1d_Group%2089-min-p-800.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
