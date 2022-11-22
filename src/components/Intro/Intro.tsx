import "./Intro.scss";

export default function Intro (props) {
    return (
        <div id="intro-container">
            <div id="intro-text">
                <div id="intro-text-inner">
                    <h2>About me</h2>
                    <p>Description bla bla.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies luctus congue. Morbi imperdiet velit in finibus vestibulum. Nam in justo bibendum diam suscipit vestibulum quis vitae nisi. Nulla non elit auctor, scelerisque sapien ac, facilisis leo. Proin condimentum purus sed turpis facilisis feugiat. Aliquam lacinia metus ac leo lobortis congue. Suspendisse ut semper risus. Pellentesque molestie, arcu eget tincidunt ultrices, sem sapien convallis nisi, ac scelerisque mauris turpis non lectus. Phasellus ullamcorper ultricies elit ut bibendum. Pellentesque blandit arcu eu odio varius lobortis. Quisque at luctus enim. Nulla egestas nunc ut urna gravida, eget scelerisque nulla interdum. Curabitur cursus dignissim ante. Morbi luctus mauris mi, at tincidunt ligula convallis vel. Aliquam aliquam scelerisque ultrices. Cras varius, odio eu posuere gravida, augue turpis tempus ex, auctor accumsan quam risus at neque.</p>
                    <a href="http://www.google.com">Click me to go somewhere</a>
                </div>
                <img src="/stock_pic.jpg" alt="my cool picture"></img>
            </div>
        </div>
    );
}
