import Header from "./components/repeat/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <Projects />
      <Footer />
    </div>
  );
}
