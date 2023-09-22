import "./App.css";
import { Nav } from "./components/Nav.tsx";
import { Hero } from "./components/Hero.tsx";
import { Faq } from "./components/Faq.tsx";
import GetLinkedTimeline from "./components/Timeline.tsx";
import { Prizes } from "./components/Prizes.tsx";
import { Partners } from "./components/Partners.tsx";
import { Policy } from "./components/Policy.tsx";
import { Footer } from "./components/Footer.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./components/Register.tsx";
import { Contact } from "./components/Contact.tsx";
import PageNotFound from "./components/PageNotFound.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Hero />
              <Faq />
              <GetLinkedTimeline />
              <Prizes />
              <Partners />
              <Policy />
              <Footer />
            </>
          }
        />
        <Route
          path="register"
          element={
            <>
              <Nav />
              <Register />
              <Footer />
            </>
          }
        />
        <Route
          path="contact"
          element={
            <>
              <Nav />
              <Contact />
              <Footer />
            </>
          }
        /><Route path="*" element={<><Nav /><PageNotFound /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
