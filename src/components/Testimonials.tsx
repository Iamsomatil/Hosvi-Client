import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-hosvi-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-hosvi-text">
            What Chiropractors Say
          </h2>
          <p className="text-xl text-hosvi-muted">
            Real results from Florida chiropractors using Hosvi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-hosvi-bg to-hosvi-surface border-2 border-hosvi-border rounded-2xl p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-2xl text-hosvi-muted italic mb-8">
              "Testimonials coming soon..."
            </p>
            <p className="text-lg text-hosvi-muted">
              We're currently onboarding our first Florida chiropractors for the 30-day free trial.<br />
              <span className="font-semibold text-hosvi-text">Be one of the first to see results and share your success story.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
