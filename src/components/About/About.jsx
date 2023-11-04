import React from 'react'
import './About.css'
import resume from "../../assets/resume.pdf"
import {gsap} from "gsap/gsap-core"

function About() {

  return (
    <>
    <div id="about-container">
      <div id="main" className='col-md-5'>
        <h1>About</h1>
      </div>
      <div id="data" className='col'>
      <div className="mt-3">
            <div>
            <p>
              I'm an Angular/React & Java based Full Stack Developer focused on
              crafting clean and user-friendly experiences, I am passionate about
              bulding excellent software that improves the lives of those around
              me.
              I can Implement effective IT Stratergies at local and global
              levels, My greatest strength is bussiness awareness, which enables
              me to permanently streamline infrastructure and applications.
            </p>
            </div>
            <div id="btn">
            <a href={resume} download=""><button class="button-85" role="button">Resume</button></a>
            </div>

            </div>
          </div>
    </div>
    </>
  )
}

export default About