import React from 'react';
import '../Hero/style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Hero(){
    return(
        <div className="Wrapper">
            <div className="content">
            <h1>Ahmed Kamal</h1>
            <h2>MEARN Stack Developer</h2>
            <div className="col-md-4 text-md-right">
              <span className="d-inline icon">
                <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
              </span>
              <span className="d-inline icon">
                <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
              </span>
              <span className="d-inline icon">
                <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
              </span>
            </div><br/>
            <button type="button" className="btn btn-info text-white">Contact Me</button>
            </div>
        </div>
    )
}

export default Hero;
