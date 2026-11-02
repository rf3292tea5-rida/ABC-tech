import { Button } from "@/components/common/Button";
import { ArrowRight, BookOpen, CheckCircle, Clock, Users } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Structured Learning",
      description: "Follow our proven curriculum designed by industry experts",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from professionals with real-world experience",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Learn at your own pace, anytime, anywhere",
    },
    {
      icon: CheckCircle,
      title: "Industry Certifications",
      description: "Earn certifications recognized by top companies",
    },
  ];

  return (
    <section className="bg-brand-surface py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-heading mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Everything you need to succeed in tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-brand-background border border-brand-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-heading font-bold text-brand-heading mb-2">
                {feature.title}
              </h3>
              <p className="text-brand-text">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
