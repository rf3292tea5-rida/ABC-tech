import { Button } from "@/components/common/Button";
import { ArrowRight, Clock, Star, Users } from "lucide-react";

export function CoursesPreviewSection() {
  const courses = [
    {
      title: "Complete Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, React, and more",
      rating: 4.9,
      students: 12500,
      duration: "40 hours",
    },
    {
      title: "Data Science with Python",
      description: "Master data analysis, visualization, and ML",
      rating: 4.8,
      students: 8900,
      duration: "35 hours",
    },
    {
      title: "Cloud Engineering with AWS",
      description: "Design and manage cloud infrastructure",
      rating: 4.7,
      students: 6700,
      duration: "30 hours",
    },
  ];

  return (
    <section className="bg-brand-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-heading mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Start your learning journey today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-brand-surface border border-brand-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-heading font-bold text-brand-heading mb-2">
                {course.title}
              </h3>
              <p className="text-brand-text mb-4">{course.description}</p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm text-brand-text">
                    {course.rating}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-brand-text" />
                  <span className="text-sm text-brand-text">
                    {course.students.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-brand-text" />
                  <span className="text-sm text-brand-text">
                    {course.duration}
                  </span>
                </div>
              </div>

              <Button variant="outline" size="sm">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
