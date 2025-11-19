import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MissionVision />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;