import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Capabilities from './components/sections/Capabilities';
import Industries from './components/sections/Industries';
import Process from './components/sections/Process';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Industries />
        <Process />
        <Footer />
      </main>
    </div>
  );
}

export default App;