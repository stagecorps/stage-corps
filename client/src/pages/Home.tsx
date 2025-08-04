import Hero from "../components/Hero";
import About from "../components/About";
import Clients from "../components/Client";
import Contact from "../components/Contact";

const Home: React.FC = () => {
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