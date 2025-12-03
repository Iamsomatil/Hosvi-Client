import { ArrowRight, Check } from 'lucide-react';

export default function BookingCTA() {
  return (
    <section id="booking-form" className="py-24 bg-hosvi-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMmg0djJoLTR6bTAtNHYyaC00di0yaDR6bTgtNHYyaC00di0yaDR6bS04LTR2Mmg0di0yaC00em04IDB2Mmg0di0yaC00em0tOC00djJoNHYtMmgtNHptOCAwdjJoNHYtMmgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Get More Patients?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12">
            Start your 30-day free trial today. No credit card required. No setup fees. Cancel anytime.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <Check className="w-6 h-6 text-green-400" />
              <span>30 Days Free</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <Check className="w-6 h-6 text-green-400" />
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <Check className="w-6 h-6 text-green-400" />
              <span>Cancel Anytime</span>
            </div>
          </div>

          <div className="bg-hosvi-bg text-hosvi-text rounded-2xl p-10 max-w-2xl mx-auto mb-12 shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-6 py-4 rounded-lg bg-hosvi-surface border border-hosvi-border text-hosvi-text placeholder-hosvi-muted focus:outline-none focus:ring-2 focus:ring-hosvi-primary focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-6 py-4 rounded-lg bg-hosvi-surface border border-hosvi-border text-hosvi-text placeholder-hosvi-muted focus:outline-none focus:ring-2 focus:ring-hosvi-primary focus:border-transparent"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-lg bg-hosvi-surface border border-hosvi-border text-hosvi-text placeholder-hosvi-muted focus:outline-none focus:ring-2 focus:ring-hosvi-primary focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-6 py-4 rounded-lg bg-hosvi-surface border border-hosvi-border text-hosvi-text placeholder-hosvi-muted focus:outline-none focus:ring-2 focus:ring-hosvi-primary focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Practice Name"
                className="w-full px-6 py-4 rounded-lg bg-hosvi-surface border border-hosvi-border text-hosvi-text placeholder-hosvi-muted focus:outline-none focus:ring-2 focus:ring-hosvi-primary focus:border-transparent"
              />
              <select className="w-full px-6 py-4 rounded-lg bg-hosvi-surface border border-hosvi-border text-hosvi-text focus:outline-none focus:ring-2 focus:ring-hosvi-primary focus:border-transparent">
                <option value="" className="bg-hosvi-bg">Select Your City</option>
                <option value="miami" className="bg-hosvi-bg">Miami</option>
                <option value="orlando" className="bg-hosvi-bg">Orlando</option>
                <option value="fort-lauderdale" className="bg-hosvi-bg">Fort Lauderdale</option>
                <option value="other" className="bg-hosvi-bg">Other Florida City</option>
              </select>
              <button
                type="submit"
                className="group w-full bg-hosvi-primary text-white px-8 py-5 rounded-lg font-bold text-xl hover:bg-hosvi-primary-hover transition-all flex items-center justify-center space-x-3 shadow-2xl"
              >
                <span>Start Your Free 30-Day Trial</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <p className="text-white/80 text-sm">
            By submitting this form, you agree to receive communication from Hosvi about our services.
          </p>
        </div>
      </div>
    </section>
  );
}
