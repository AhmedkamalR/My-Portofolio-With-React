import React from 'react'
import Card from './Card';
import '../portfolio/style.css';

function Portfolio() {
  return (
    <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio-content">
            <ul>
                <li><Card name={"Web Design"}/></li>
                <li><Card name={"Mobile Design"}/></li>
                <li><Card name={"Logo Design"}/></li>
                <li><Card name={"Web Application Development"}/></li>
                <li><Card name={"Mobile Application Development"}/></li>
                <li><Card name={"PA Development"}/></li>
            </ul>
        </div>
    </div>
  )
}

export default Portfolio