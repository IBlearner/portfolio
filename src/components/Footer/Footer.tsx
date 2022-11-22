import "./Footer.scss";
import { BsLinkedin, BsGithub, BsInstagram, BsMessenger, BsFillArrowUpCircleFill } from "react-icons/bs";

export default function TechStack () {
    const onBackToTopClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div id="footer-container">
            <div id="back-to-top">
                <h3>Back to top</h3>
                <BsFillArrowUpCircleFill id="back-to-top-button" size={20} onClick={onBackToTopClick}/>
            </div>
            <div id="icon-boxes">
                <a href="http://www.google.com" target="_blank" rel="noreferrer" className="icon-box"><BsLinkedin size={40}/></a>
                <a href="http://www.google.com" target="_blank" rel="noreferrer" className="icon-box"><BsGithub size={40}/></a>
                <a href="http://www.google.com" target="_blank" rel="noreferrer" className="icon-box"><BsInstagram size={40}/></a>
                <a href="http://www.google.com" target="_blank" rel="noreferrer" className="icon-box"><BsMessenger size={40}/></a>
            </div>
        </div>
    );
}
