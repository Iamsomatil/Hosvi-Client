import { AlertCircle, TrendingDown, BarChart3, Users, Calendar } from 'lucide-react';

const painPoints = [
  {
    icon: TrendingDown,
    title: "Not Enough New Patients",
    description: "Your schedule has gaps and you're struggling to fill appointment slots consistently."
  },
  {
    icon: BarChart3,
    title: "Unpredictable Monthly Revenue",
    description: "Some months are great, others are slow. You need steady, reliable patient flow."
  },
  {
    icon: AlertCircle,
    title: "Marketing Agencies That Don't Deliver",
    description: "You've been burned before by agencies that overpromise and underdeliver with zero accountability."
  },
  {
    icon: Users,
    title: "No Visibility Into Your Marketing",
    description: "You're told to 'trust the process' but never see real numbers or where your money goes."
  },
  {
    icon: Calendar,
    title: "Inconsistent Lead Flow",
    description: "Leads come in spurts, making it impossible to plan growth or manage your practice effectively."
  }
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-hosvi-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-hosvi-text">
            Sound Familiar?
          </h2>
          <p className="text-xl text-hosvi-muted">
            You're not alone. Most chiropractors in Florida face these exact challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-hosvi-bg p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-hosvi-border"
              >
                <div className="bg-hosvi-surface w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-hosvi-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-hosvi-text">{point.title}</h3>
                <p className="text-hosvi-muted leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="text-xl font-semibold text-hosvi-text">
            It's time to fix this. Permanently.
          </p>
        </div>
      </div>
    </section>
  );
}
