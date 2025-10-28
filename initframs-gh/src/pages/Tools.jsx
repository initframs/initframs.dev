import Project from '../components/Project'
import "../cursor.css";

const Root = () => {

  return (
    <>
      <h1 className="header">
        tools
      </h1>
      <div className="projects-list">
        <Project
          header="something"
          text="sdfasd fasdfasdf asdfas dfasd fas dfasdfasd fasdf asd fasdf"
          link="#"
        />
        <Project
          header="goes"
          text="wertyu iopsdf ghj klzxcvbnmq wertyuio qwertyuiop qwert yuiop"
          link="#"
        />
        <Project
          header="here"
          text="adfkgehrg kqeyrgkuyneb ygiuwh kghdskjf sghiuerwygiu sergjhgsdfg"
          link="#"
        />
      </div>
    </>
  );
};

export default Root;
