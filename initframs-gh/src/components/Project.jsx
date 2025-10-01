import "../project.css";

const Project = ({ imagePath, header, text }) => {
    return (
        <div className="project-card">
            {imagePath && <img src={imagePath} alt={header} className="project-image" />}
            {header && <h2 className="project-header">{header}</h2>}
            {text && <p className="project-text">{text}</p>}
        </div>
    );
};

export default Project;
