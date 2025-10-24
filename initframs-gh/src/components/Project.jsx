import { useState } from 'react';
import "../project.css";
import "../cursor.css";

const Project = ({ imagePath, header, text, link }) => {
    const [blinking, setBlinking] = useState(false);
    return (
        <div className="project-card">
            {imagePath && <img src={imagePath} alt={header} className="project-image" />}
            {header && <a href={link} className="project-link"><h2 onMouseOver={() => setBlinking(true)} onMouseLeave={() => setBlinking(false)} className="project-header"><span className={blinking ? "terminal-cursor blink" : "terminal-cursor-hidden"}>{"> "}</span>{header}</h2></a>}
            {text && <p className="project-text">{text}</p>}
        </div>
    );
};

export default Project;
