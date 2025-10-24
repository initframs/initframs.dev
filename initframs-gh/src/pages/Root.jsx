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
      <div className="projects-list">
        <Project
          header="// tools"
          text="a set of useful design/coding related tools made by me"
          link="#"
        />
        <Project
          header="// portfolio"
          text="curated selection of sites and projects i've made"
          link="#"
        />
        <Project
          header="// stacks"
          text="my dotfiles, preferred software choices and fav themes"
          link="#"
        />
      </div>
    </>
  );
};

export default Root;
