import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { careerDetailsData } from "./CareerDetails.data";
import { CheckCircle, ArrowLeft, Code } from "lucide-react";

export function CareerDetailsPage() {
  const { id } = useParams();

  // Find the specific career that matches the URL ID
  const career = careerDetailsData.find((c) => c.id === id);

  // If the ID doesn't match any career, redirect to the main careers page
  if (!career) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <div className="bg-brand-surface min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Breadcrumb / Back */}
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primaryDark mb-8 font-medium"
        >
          <ArrowLeft size={18} /> Back to Careers
        </Link>

        {/* Hero */}
        <div className="bg-brand-background border border-brand-border rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center">
              <Code className="w-7 h-7 text-brand-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-heading">
              {career.title}
            </h1>
          </div>
          <p className="text-xl text-brand-text leading-relaxed">
            {career.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <Card>
              <h2 className="text-2xl font-heading font-bold text-brand-heading mb-4">
                Overview
              </h2>
              <p className="text-brand-text leading-relaxed">
                {career.overview}
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-heading font-bold text-brand-heading mb-6">
                Your Learning Roadmap
              </h2>
              <div className="space-y-6">
                {career.roadmap.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-brand-heading text-lg">
                        {item.title}
                      </h3>
                      <p className="text-brand-text">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <h3 className="font-heading font-bold text-brand-heading mb-4">
                Required Skills
              </h3>
              <ul className="space-y-3">
                {career.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-brand-text font-medium">
                      {skill.name}
                    </span>
                    <span className="bg-brand-surface text-brand-primary px-2 py-1 rounded text-xs font-bold border border-brand-border">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="bg-brand-primary rounded-xl p-6 text-center text-white">
              <h3 className="font-heading font-bold text-xl mb-2">
                Ready to start?
              </h3>
              <p className="text-white/80 text-sm mb-6">
                Explore courses tailored for this path.
              </p>
              <Link to="/courses">
                <Button variant="secondary" className="w-full">
                  View Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
