import React from "react";
import ProgressBar from "./ProgressBar";
import "../Skills/style.css";

function Skills() {
  return (
    <div className="skills">
      <div className="header">
        <h1>Skills</h1>
      </div>
      <p>
      I am a Freelance Web Developer with experience in Full-stack Developer almost 2 years experience Focused and detailed oriented offering troubleshooting skills and talent for developing innovation unusual and difficult problems,I can do many things related to the job. I am quite adept in coding and markup languages : HTML5/CSS3/JavaScript/OOP/ ReactJS&nodejs Please hit contact button and leave a message for me. You will get response in 10 minutes as well as standard attitude like a friend.
      </p>

      <div className="skills-content">
        <div className="my-focus">
            <ul >
                <li>MY Focus</li>
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
                <li>WEB Design</li>
                <li>Mobile Design</li>
            </ul>
        </div>
        <div className="progress">
        <ul>
                <li><ProgressBar title={"Html"} precentage={"85"}/></li>
                <li><ProgressBar title={"CSS"} precentage={"90"}/></li>
                <li><ProgressBar title={"JS"} precentage={"80"}/></li>
                <li><ProgressBar title={"React"} precentage={"70"}/></li>
                <li><ProgressBar title={"Node JS"} precentage={"65"}/></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
