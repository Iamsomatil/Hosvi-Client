import { Target, Calendar, Linkedin, Mail, TestTube, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Lead Generation",
    description: "Targeted outreach to qualified prospects in Miami, Orlando, and Fort Lauderdale."
  },
  {
    icon: Calendar,
    title: "Booking Automation",
    description: "Automated scheduling system that turns leads into confirmed appointments."
  },
  {
    icon: Linkedin,
    title: "Google & LinkedIn Setup",
    description: "Professional Google Business Profile and LinkedIn presence optimization."
  },
  {
    icon: Mail,
    title: "Multi-Mailbox Campaigns",
    description: "Sophisticated email outreach with multiple sending domains for higher deliverability."
  },
  {
    icon: TestTube,
    title: "A/B Testing (Premium)",
    description: "Continuous split testing of messaging, audiences, and creative for optimal performance."
  },
  {
    icon: MessageSquare,
    title: "SMS Follow-Ups (Premium)",
    description: "Automated text message sequences to nurture leads and reduce no-shows."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-hosvi-bg text-hosvi-text">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to Grow
          </h2>
          <p className="text-xl text-hosvi-muted">
            All the tools and services chiropractors need to acquire and retain more patients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-hosvi-surface border border-hosvi-border p-8 rounded-xl hover:shadow-md transition-all"
              >
                <div className="bg-gradient-to-br from-hosvi-primary to-hosvi-primary-hover w-14 h-14 rounded-lg flex items-center justify-center mb-5 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-hosvi-text">{feature.title}</h3>
                <p className="text-hosvi-muted leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
