import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('booking-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-hosvi-bg text-hosvi-text">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold tracking-tight">
              Hosvi<span className="text-hosvi-accent">.</span>
            </div>
          </div>
          <button
            type="button"
            onClick={scrollToForm}
            className="bg-hosvi-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-hosvi-primary-hover transition-all shadow-sm"
          >
            Book Free Consultation
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-16 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-hosvi-surface border border-hosvi-border rounded-full px-4 py-2 mb-8">
            <MapPin className="w-4 h-4 text-hosvi-accent" />
            <span className="text-sm font-medium text-hosvi-muted">
              Serving Florida: Miami • Orlando • Fort Lauderdale
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Get More Patients.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hosvi-primary to-hosvi-primary-hover">
              Guaranteed.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-hosvi-muted mb-4 leading-relaxed">
            The done-for-you patient acquisition system built exclusively for Florida chiropractors.
          </p>

          <p className="text-lg text-hosvi-muted mb-10">
            Stop wasting money on agencies that don't deliver. Get predictable monthly appointments with full transparency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              type="button"
              onClick={scrollToForm}
              className="group bg-hosvi-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-hosvi-primary-hover transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Start Your 30-Day FREE Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-hosvi-surface border border-hosvi-border text-hosvi-text px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white transition-all">
              See How It Works
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-hosvi-border">
            <div>
              <div className="text-3xl font-bold mb-1">30</div>
              <div className="text-sm text-hosvi-muted">Day Free Trial</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-hosvi-muted">Transparent Analytics</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">0</div>
              <div className="text-sm text-hosvi-muted">Setup Fees</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-hosvi-surface to-transparent" />
    </section>
  );
}
