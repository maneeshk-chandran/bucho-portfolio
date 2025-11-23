import React, { useRef } from "react";
import CustomHook from "./CustomHook";

function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
           <span>I'm VIPIN DEV</span>
        </div>
        <div className="des">
          {/* 30 */}
          a passionate Continental chef with
a remarkable 12-year tenure in United Arab Emirates and 4-year tenure in the United Kingdom in the culinary industry,
specializing in an array of cuisines. My culinary
journey has been anchored in the realms of a la carte
and banquets, where I craft tailored, individual dishes
and costings made to order, providing a personalised
dining experience. I thrive in a fast-paced kitchen
environment and love collaborating with a team to
deliver exceptional dining experiences. Checkout my resume for more
        </div>

        <a
          href="/Modern Minimalist CV Resume.pdf (1).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button "
        >
          DOWNLOAD MY CV
        </a>
        <br />
        <a
          href="/Untitled design.pdf.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button "
        >
          MY QUALIFICATIONS
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img
            src="/WhatsApp Image 2025-11-13 at 16.57.52_1caf4634.jpg"
            alt="Profile"
            onError={(e) => (e.target.style.display = "none")}
          />
          <div className="info">
            <div>HEAD CHEF</div>
            <div>INDIAN</div>
            {/* <div>26/05</div> */}
            {/* <div>Male</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
