import "../404.css";
import { useLocation } from "wouter";

const NotFound = () => {
    const [location, navigate] = useLocation();

    return (
        <div className="container-404">
            <h1 className="header">HTTP/2 404 <br /> GET {location}</h1>
            <h2 className="subheader">looks like that page doesn't exist ¯<span className="jp">\_(ツ)_/</span>¯</h2>
            <h2 className="subheader">you can <a href="/">head back</a> or just chill here</h2>
        </div>
    );
};

export default NotFound;
