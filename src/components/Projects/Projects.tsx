import "./Projects.scss";
import { useEffect, useRef } from "react";

export default function TechStack (props) {
    const myPos = useRef(null)

    useEffect(() => {
        // props.getSectionValY(myPos.current.offsetTop);
    }, []);

    return (
        <div id="projects-container" ref={myPos}>
            <h2>Projects</h2>
            <div id="techstack-boxes">
                <div className="techstack-box">Frameworks</div>
                <div className="techstack-box">Languages</div>
                <div className="techstack-box">Design tools</div>
            </div>
        </div>
    );
}
