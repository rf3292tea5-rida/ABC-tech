import { Button } from "@/components/common/Button";
import { ArrowRight, Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Web Developer",
      content:
        "This platform helped me land my dream job in tech. The structured learning path and expert instructors made all the difference.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      content:
        "The career assessment was spot-on. It guided me to data science, and the courses prepared me perfectly for the industry.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Cloud Engineer",
      content:
        "The flexibility to learn at my own pace while working full-time was exactly what I needed. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <section className="bg-brand-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-heading mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Hear from our graduates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-brand-surface border border-brand-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-brand-primary/20 mb-4" />
              <p className="text-brand-text mb-4">{testimonial.content}</p>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              <div>
                <h4 className="font-heading font-bold text-brand-heading">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-brand-text">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">
            Read More Stories
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
