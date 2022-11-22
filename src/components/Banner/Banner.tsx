import { useRef } from "react";
import "./Banner.scss";
import { useScrollPosition } from "../../hooks/useScrollPosition";

export default function Banner (props) {
    const scrollPosition = useScrollPosition();
    console.log(scrollPosition)

    const sectionPositions = {
        intro: 494,
        techStack: 996.3, // 622.3
        projects: 1557.6, // 561.3
        contactMe: 1980 //422.4
    }

    const className = (tabName: string) => {
        return (tabName === props.activeTab) ? "active-tab" : "";
    }

    const onTabClick = (targElemName: string) => {
        if (sectionPositions[targElemName]) {
            window.scrollTo({
                top: sectionPositions[targElemName],
                behavior: "smooth"
            })
        }
    }
    
    return (
        <div id="banner-container">
            <div>Kienvi</div>
            <div className={className("intro")} onClick={() => onTabClick("intro")}>About me</div>
            <div className={className("tech-stack")} onClick={() => onTabClick("techStack")}>Tech stack</div>
            <div className={className("projects")} onClick={() => onTabClick("projects")}>Projects</div>
            <div className={className("contact-me")} onClick={() => onTabClick("contactMe")}>Contact me</div>
        </div>
    );
}
