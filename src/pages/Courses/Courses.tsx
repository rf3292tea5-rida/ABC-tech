import { Link } from 'react-router-dom';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { coursesData } from './Courses.data';
import { Clock, Users, BookOpen } from 'lucide-react';

export function CoursesPage() {
  return (
    <div className="bg-brand-surface min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-heading mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Structured, project-based learning to get you career-ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <Card key={course.id} hoverEffect className="flex flex-col">
              <div className="mb-4">
                <span className="bg-brand-primary/10 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {course.category}
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-heading mb-2">{course.title}</h3>
              <p className="text-brand-text text-sm mb-6 flex-grow">{course.description}</p>
              
              <div className="flex items-center gap-4 text-sm text-brand-text mb-6 border-t border-brand-border pt-4">
                <div className="flex items-center gap-1">
                  <Clock size={14} /> {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users size={14} /> {course.students}
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen size={14} /> {course.level}
                </div>
              </div>

              <Link to={`/courses/${course.id}`} className="w-full">
                <Button variant="outline" className="w-full">View Curriculum</Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}