import { Button } from "@/components/common/Button";
import { ArrowRight, Book, CheckCircle, Clock, Target } from "lucide-react";
import { Link } from 'react-router-dom';

export function LearningRoadmapSection() {
  const steps = [
    {
      icon: Target,
      title: "Assess Your Skills",
      description: "Take our career assessment to find your path",
    },
    {
      icon: Book,
      title: "Learn the Fundamentals",
      description: "Master the basics with our structured courses",
    },
    {
      icon: Clock,
      title: "Practice Daily",
      description: "Build projects and gain real-world experience",
    },
    {
      icon: CheckCircle,
      title: "Get Certified",
      description: "Earn certifications and land your dream job",
    },
  ];

  return (
    <section className="bg-brand-surface py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-heading mb-4">
            Your Learning Roadmap
          </h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Follow our proven path to success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-brand-primary/20"></div>
              )}
              <div className="bg-brand-background border border-brand-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="font-heading font-bold text-brand-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-brand-text">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/courses">
            <Button variant="primary" className="gap-2">
              Start Learning <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
