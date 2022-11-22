import "./ContactMe.scss";
import { useEffect, useRef } from "react";


export default function TechStack (props) {
    const myPos = useRef(null)

    // const submit = () => {
    //     console.log("fgndjs")
    // }

    useEffect(() => {
        // props.getSectionValY(myPos.current.offsetTop);
    }, []);

    return (
        <div id="contactme-container" ref={myPos}>
            <h2>Contact me</h2>
            {/* <form action={submit}>
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="message"/>
                <button>Submit</button>
            </form> */}
        </div>
    );
}
