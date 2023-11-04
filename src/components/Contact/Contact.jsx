import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div id="container">
        <div id="contact-head">
          <div class="heading0 mx-2">
            <h1>Get In</h1>
          </div>
          <div class="heading1 mx-2">
            <h1>Touch</h1>
          </div>
        </div>
        <div id="text-data" className="flex">
          <div className="text-container flex">
            <div id="text">
              <h1>Don't Be Shy !</h1>
              <p>
                Feel Free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your vision.
              </p>
              <div id="email" className="flex gap-6 my-4">
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/nolan/64/apple-mail.png"
                  alt="apple-mail"
                />
                <h1>aadimohan51@gmail.com</h1>
              </div>
              <div id="number" className="flex gap-6">
                <img
                  src="https://img.icons8.com/nolan/64/phone.png"
                  alt="phone"
                />
                <h1>8881685609</h1>
              </div>
              <div id="socials" className="my-12">
        <div id="social-head">
          <h1>#socials</h1>
        </div>
        <div id="links" className="flex gap-7 ">
        <a href="https://github.com/AadityaMohan-dev">
              <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/github.png" alt="github"/>
              </a>
              <a href="https://in.linkedin.com/in/aaditya-mohan">
              <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedin"/>
              </a>
              <a href="https://www.facebook.com/Aaditya0019">
              <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/facebook-circled.png" alt="facebook-circled"/>
              </a>
              <a href="https://instagram.com/__.aaditya.mohan.__?igshid=OGQ5ZDc2ODk2ZA==">
              <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/instagram-new.png" alt="instagram-new"/>
              </a>
        </div>
              
            </div>
            </div>
          </div>
          <div id="form" className="px-8">
            <div id="data" className="flex justify-between py-12">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="phone" placeholder="Phone" />
            </div>
            <div id="msg">
              <textarea name="msg" id="text-id" cols="83" rows="10" placeholder="Your message / Feedback"></textarea>
            </div>

            <div id="btn">
              <button class="button-85" role="button">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
