import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function BookingCTA() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [practiceName, setPracticeName] = useState('');
  const [role, setRole] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://hook.us2.make.com/bhqhqea6c86d8e21phxk7jmsqg0tsoqh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          practiceName,
          role,
          city,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Non-200 response');
      }

      setSubmitStatus('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setPracticeName('');
      setRole('');
      setCity('');
      setMessage('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-6 py-4 rounded-lg bg-hosvi-surface border border-hosvi-border text-hosvi-text placeholder-hosvi-muted focus:outline-none focus:ring-2 focus:ring-hosvi-primary focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-6 py-4 rounded-lg bg-hosvi-surface border border-hosvi-border text-hosvi-text placeholder-hosvi-muted focus:outline-none focus:ring-2 focus:ring-hosvi-primary focus:border-transparent"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-hosvi-surface border border-hosvi-border text-hosvi-text placeholder-hosvi-muted focus:outline-none focus:ring-2 focus:ring-hosvi-primary focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-hosvi-surface border border-hosvi-border text-hosvi-text placeholder-hosvi-muted focus:outline-none focus:ring-2 focus:ring-hosvi-primary focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Practice Name"
                value={practiceName}
                onChange={(e) => setPracticeName(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-hosvi-surface border border-hosvi-border text-hosvi-text placeholder-hosvi-muted focus:outline-none focus:ring-2 focus:ring-hosvi-primary focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Role (e.g. Practice Owner, Manager)"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-hosvi-surface border border-hosvi-border text-hosvi-text placeholder-hosvi-muted focus:outline-none focus:ring-2 focus:ring-hosvi-primary focus:border-transparent"
              />
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-hosvi-surface border border-hosvi-border text-hosvi-text focus:outline-none focus:ring-2 focus:ring-hosvi-primary focus:border-transparent"
              >
                <option value="" className="bg-hosvi-bg">Select Your City</option>
                <option value="miami" className="bg-hosvi-bg">Miami</option>
                <option value="orlando" className="bg-hosvi-bg">Orlando</option>
                <option value="fort-lauderdale" className="bg-hosvi-bg">Fort Lauderdale</option>
                <option value="other" className="bg-hosvi-bg">Other Florida City</option>
              </select>
              <textarea
                placeholder="Message (optional)"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-hosvi-surface border border-hosvi-border text-hosvi-text placeholder-hosvi-muted focus:outline-none focus:ring-2 focus:ring-hosvi-primary focus:border-transparent resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-hosvi-primary text-white px-8 py-5 rounded-lg font-bold text-xl hover:bg-hosvi-primary-hover disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-3 shadow-2xl"
              >
                <span>{isSubmitting ? 'Submitting...' : 'Start Your Free 30-Day Trial'}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              {submitStatus === 'success' && (
                <p className="text-sm text-green-600 text-left">
                  Thank you! Your details have been submitted.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-600 text-left">
                  Something went wrong. Please try again in a moment.
                </p>
              )}
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
