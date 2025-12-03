import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "$1,500",
    period: "/month",
    description: "Perfect for getting started with patient acquisition",
    highlight: false,
    features: [
      "Outbound email engine",
      "CRM tracking & management",
      "Custom landing pages",
      "Google Business Profile setup",
      "LinkedIn page optimization",
      "Real-time analytics dashboard",
      "Monthly performance reports",
      "Email support"
    ]
  },
  {
    name: "Premium",
    price: "$3,000",
    period: "/month",
    description: "Maximum growth with ads and advanced optimization",
    highlight: true,
    features: [
      "Everything in Basic, plus:",
      "Facebook & Google Ads management",
      "SMS follow-up sequences",
      "Weekly performance optimization",
      "A/B testing & conversion optimization",
      "Priority support",
      "Dedicated account manager",
      "Advanced reporting & insights"
    ]
  }
];

export default function Plans() {
  const scrollToForm = () => {
    const formSection = document.getElementById('booking-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-hosvi-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-hosvi-bg text-hosvi-accent px-4 py-2 rounded-full mb-6 font-semibold border border-hosvi-border">
            <Zap className="w-4 h-4" />
            <span>30-Day Free Trial Available</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-hosvi-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-hosvi-muted">
            No setup fees. No contracts. Cancel anytime. Start your 30-day free trial today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-10 ${
                plan.highlight
                  ? 'bg-gradient-to-br from-hosvi-primary to-hosvi-primary-hover text-white border-4 border-hosvi-primary shadow-2xl transform md:scale-105'
                  : 'bg-hosvi-bg border-2 border-hosvi-border shadow-lg'
              }`}
            >
              {plan.highlight && (
                <div className="bg-hosvi-accent text-white text-sm font-bold py-2 px-4 rounded-lg inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className={`text-3xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-hosvi-text'}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${plan.highlight ? 'text-white/90' : 'text-hosvi-muted'}`}>
                {plan.description}
              </p>
              <div className="mb-8">
                <span className={`text-5xl font-bold ${plan.highlight ? 'text-white' : 'text-hosvi-text'}`}>
                  {plan.price}
                </span>
                <span className={`text-xl ${plan.highlight ? 'text-white/80' : 'text-hosvi-muted'}`}>
                  {plan.period}
                </span>
              </div>
              <button
                type="button"
                onClick={scrollToForm}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all mb-8 ${
                plan.highlight
                  ? 'bg-white text-hosvi-primary hover:bg-hosvi-bg shadow-lg'
                  : 'bg-hosvi-primary text-white hover:bg-hosvi-primary-hover shadow-md'
              }`}
              >
                Start Free Trial
              </button>
              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
                      plan.highlight ? 'text-white' : 'text-green-600'
                    }`} />
                    <span className={`${plan.highlight ? 'text-white/90' : 'text-hosvi-muted'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-12 bg-hosvi-bg border-2 border-hosvi-border p-8 rounded-xl">
          <p className="text-lg text-hosvi-muted">
            <span className="font-bold">Not sure which plan is right for you?</span><br />
            Start with the free trial and we'll help you choose based on your goals.
          </p>
        </div>
      </div>
    </section>
  );
}
