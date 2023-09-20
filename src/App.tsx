import "./App.css";
import {Nav} from "./components/Nav.tsx";
import {Hero} from "./components/Hero.tsx";
import {Faq} from "./components/Faq.tsx";
import GetLinkedTimeline from "./components/Timeline.tsx";
import {Prizes} from "./components/Prizes.tsx";
import {Partners} from "./components/Partners.tsx";
import {Policy} from "./components/Policy.tsx";
import {Footer} from "./components/Footer.tsx";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Nav/>
            <Hero/>
            <Faq/>
            <GetLinkedTimeline/>
            <Prizes/>
            <Partners/>
            <Policy/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
