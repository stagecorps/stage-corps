import Hero from "../components/Hero";
import About from "../components/About";
import Clients from "../components/Client";
import Contact from "../components/Contact";
import { FC } from "react";

const Home: FC = () => {
    return (
        <main className="main">
            <Hero />
            <About />
            <Clients />
            <Contact />
        </main>
    );
}
export default Home;