import { Users, Zap, BarChart, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: "More Qualified Patients",
    description: "Get a steady stream of patients who actually need your services and are ready to book appointments."
  },
  {
    icon: Zap,
    title: "Done-For-You System",
    description: "We handle everything: outreach, follow-ups, booking pages, CRM setup. You just show up and treat patients."
  },
  {
    icon: BarChart,
    title: "Complete Transparency",
    description: "Real-time analytics dashboard showing every lead, reply, booked call, and show rate. No more guessing."
  },
  {
    icon: TrendingUp,
    title: "Predictable Growth",
    description: "Consistent monthly appointment flow means you can finally plan for growth and scale your practice confidently."
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-hosvi-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-hosvi-text">
            Here's What You Get Instead
          </h2>
          <p className="text-xl text-hosvi-muted">
            A proven patient acquisition system that actually works for chiropractors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-hosvi-surface to-hosvi-bg p-10 rounded-2xl border border-hosvi-border hover:border-hosvi-primary transition-all hover:shadow-lg"
              >
                <div className="bg-gradient-to-br from-hosvi-primary to-hosvi-primary-hover w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-hosvi-text">{benefit.title}</h3>
                <p className="text-lg text-hosvi-muted leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16 bg-hosvi-primary text-white p-10 rounded-2xl">
          <p className="text-2xl font-bold mb-2">
            Zero Risk. 30 Days Free.
          </p>
          <p className="text-lg text-white/90">
            See the results for yourself before spending a single dollar.
          </p>
        </div>
      </div>
    </section>
  );
}
