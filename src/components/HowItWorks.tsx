import { Mail, Database, Calendar, LineChart, Megaphone } from 'lucide-react';

const steps = [
  {
    icon: Mail,
    number: "01",
    title: "Multi-Mailbox Outreach Engine",
    description: "We build and manage a sophisticated email outreach system targeting qualified prospects in your Florida market."
  },
  {
    icon: Database,
    title: "CRM Tracking & Management",
    number: "02",
    description: "Every lead is tracked in your GoHighLevel (GHL) CRM. See exactly who's interested and at what stage."
  },
  {
    icon: Calendar,
    title: "Automated Booking Pages",
    number: "03",
    description: "Custom landing pages and scheduling tools that convert leads into booked appointments automatically."
  },
  {
    icon: LineChart,
    title: "Real-Time Analytics Dashboard",
    number: "04",
    description: "Access your client portal 24/7 to see leads, replies, conversion rates, and ROI in real-time."
  },
  {
    icon: Megaphone,
    title: "Paid Ads & Optimization (Premium)",
    number: "05",
    description: "Facebook and Google Ads, SMS follow-ups, A/B testing, and weekly optimization for maximum results."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-hosvi-surface to-hosvi-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-hosvi-text">
            How Hosvi Works
          </h2>
          <p className="text-xl text-hosvi-muted">
            A proven 5-step system designed specifically for chiropractors who want more patients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-hosvi-bg p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-hosvi-border flex items-start space-x-6"
              >
                <div className="flex-shrink-0">
                  <div className="bg-hosvi-primary text-white w-16 h-16 rounded-lg flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-hosvi-accent font-bold text-lg">{step.number}</span>
                    <h3 className="text-2xl font-bold text-hosvi-text">{step.title}</h3>
                  </div>
                  <p className="text-lg text-hosvi-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
