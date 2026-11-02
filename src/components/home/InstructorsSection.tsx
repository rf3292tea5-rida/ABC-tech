import { Button } from "@/components/common/Button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

export function InstructorsSection() {
  const instructors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Web Development Expert",
      bio: "10+ years of industry experience",
    },
    {
      name: "Michael Chen",
      role: "Data Science Lead",
      bio: "Former Google engineer",
    },
    {
      name: "Emily Rodriguez",
      role: "Cloud Architecture Specialist",
      bio: "AWS certified professional",
    },
  ];

  return (
    <section className="bg-brand-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-heading mb-4">
            Meet Our Instructors
          </h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Learn from industry experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-brand-surface border border-brand-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-brand-primary">
                  {instructor.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-heading font-bold text-brand-heading text-center mb-2">
                {instructor.name}
              </h3>
              <p className="text-brand-primary text-center text-sm mb-2">
                {instructor.role}
              </p>
              <p className="text-brand-text text-center text-sm mb-4">
                {instructor.bio}
              </p>

              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center hover:bg-brand-primary/20 transition-colors"
                >
                  <FaTwitter className="w-4 h-4 text-brand-primary" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center hover:bg-brand-primary/20 transition-colors"
                >
                  <FaLinkedinIn className="w-4 h-4 text-brand-primary" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center hover:bg-brand-primary/20 transition-colors"
                >
                  <IoLogoGithub className="w-4 h-4 text-brand-primary" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">
            View All Instructors
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
