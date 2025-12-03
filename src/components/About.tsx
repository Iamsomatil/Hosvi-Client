import { Building2, Target, Shield } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-hosvi-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-hosvi-text">
              About Hosvi
            </h2>
            <p className="text-xl text-hosvi-muted">
              Growth systems built exclusively for chiropractors in Florida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-hosvi-surface w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-hosvi-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-hosvi-text">Our Focus</h3>
              <p className="text-hosvi-muted">
                Chiropractors in Florida
              </p>
            </div>
            <div className="text-center">
              <div className="bg-hosvi-surface w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-hosvi-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-hosvi-text">Our Mission</h3>
              <p className="text-hosvi-muted">
                Predictable patient acquisition for health practices
              </p>
            </div>
            <div className="text-center">
              <div className="bg-hosvi-surface w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-hosvi-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-hosvi-text">Our Promise</h3>
              <p className="text-hosvi-muted">
                Complete transparency and measurable results
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-hosvi-surface to-hosvi-bg border-2 border-hosvi-border rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-6 text-hosvi-text">Why Chiropractors Trust Hosvi</h3>
            <div className="space-y-4 text-lg text-hosvi-muted leading-relaxed">
              <p>
                We're not a generalist marketing agency trying to serve everyone. We specialize exclusively in patient acquisition for chiropractors in Florida.
              </p>
              <p>
                Every strategy, every campaign, and every optimization is built around one goal: getting you more qualified patients who book and show up for appointments.
              </p>
              <p>
                We believe in complete transparency. That's why every client gets access to a real-time analytics dashboard showing exactly where your leads come from, how they convert, and what your ROI looks like.
              </p>
              <p className="font-semibold text-hosvi-text">
                No more black boxes. No more vague promises. Just real results you can track every single day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
