import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Plans from './components/Plans';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-hosvi-bg">
      <Hero />
      <PainPoints />
      <Benefits />
      <HowItWorks />
      <Features />
      <Plans />
      <About />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </div>
  );
}

export default App;
