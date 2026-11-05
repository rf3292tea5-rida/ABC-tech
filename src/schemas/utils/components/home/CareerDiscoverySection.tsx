import { Button } from "@/components/common/Button";
import { ArrowRight, Code, Database, Globe, Smartphone } from "lucide-react";
import { Link } from "react-router-dom"; // Make sure to import this!

export function CareerDiscoverySection() {
  const careers = [
    {
      icon: Code,
      title: "Web Development",
      description: "Build websites and web applications",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Create mobile apps for iOS and Android",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Analyze data and build ML models",
    },
    {
      icon: Globe,
      title: "Cloud Engineering",
      description: "Design and manage cloud infrastructure",
    },
  ];

  return (
    <section className="bg-brand-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-heading mb-4">
            Explore Career Paths
          </h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Find the perfect tech career for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {careers.map((career, index) => (
            // Inside the map function for your career cards:
            <Link to={`/careers/${career.id}`} key={index} className="block">
              <div className="bg-brand-surface border border-brand-border rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <div
                  key={index}
                  className="bg-brand-surface border border-brand-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <career.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-brand-heading mb-2">
                    {career.title}
                  </h3>
                  <p className="text-brand-text">{career.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/find-your-path">
            <Button variant="primary" className="gap-2">
              Take Career Assessment <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
