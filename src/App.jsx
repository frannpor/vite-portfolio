import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import Technologies from "./components/Technologies";
import Work from "./components/Work";

export default function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}
