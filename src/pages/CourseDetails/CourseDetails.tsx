import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { coursesData } from '@/pages/Courses/Courses.data';
import { ArrowLeft, CheckCircle, PlayCircle } from 'lucide-react';

export function CourseDetailsPage() {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === id) || coursesData[0];

  return (
    <div className="bg-brand-surface min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/courses" className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primaryDark mb-8 font-medium">
          <ArrowLeft size={18} /> Back to Courses
        </Link>

        <div className="bg-brand-background border border-brand-border rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <span className="bg-brand-primary/10 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
            {course.category} • {course.level}
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-heading mb-4">{course.title}</h1>
          <p className="text-xl text-brand-text">{course.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <h2 className="text-2xl font-heading font-bold text-brand-heading mb-6">What You Will Learn</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Build real-world projects', 'Understand core concepts', 'Write clean, maintainable code', 'Deploy to production', 'Debug and test effectively', 'Collaborate using Git'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-brand-text">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-heading font-bold text-brand-heading mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {[
                  { title: 'Module 1: Introduction & Setup', lessons: 4 },
                  { title: 'Module 2: Core Fundamentals', lessons: 8 },
                  { title: 'Module 3: Advanced Concepts', lessons: 6 },
                  { title: 'Module 4: Final Project', lessons: 3 },
                ].map((mod, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-brand-surface rounded-lg border border-brand-border">
                    <div className="flex items-center gap-3">
                      <PlayCircle className="w-5 h-5 text-brand-primary" />
                      <span className="font-medium text-brand-heading">{mod.title}</span>
                    </div>
                    <span className="text-sm text-brand-text">{mod.lessons} lessons</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div>
            <Card className="sticky top-24">
              <div className="text-center mb-6">
                <p className="text-sm text-brand-text mb-2">Duration: {course.duration}</p>
                <p className="text-sm text-brand-text">Students: {course.students}</p>
              </div>
              <Link to="/enrollment" className="block w-full mb-4">
                <Button variant="primary" className="w-full">Enroll Now</Button>
              </Link>
              <p className="text-xs text-center text-brand-text">
                30-day money-back guarantee. Lifetime access.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}