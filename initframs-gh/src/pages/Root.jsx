import { useState } from "react";
import Project from '../components/Project'
import "../cursor.css";

const Root = () => {
  const [blinking, setBlinking] = useState(true);

  return (
    <>
      <h1 className="header">
        hi, i'm initframs
        <span className={blinking ? "terminal-cursor blink" : "terminal-cursor"}>_</span>
      </h1>
      {/* <div className="projects-list">
        <Project
          header="My First Project"
          text="This is a description of my first project. It showcases amazing features and cool design."
        />
      </div> */}
    </>
  );
};

export default Root;
