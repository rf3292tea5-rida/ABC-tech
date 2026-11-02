import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { mentorsData } from './Mentors.data';
import { Briefcase, Star, Calendar } from 'lucide-react';

export function MentorsPage() {
  return (
    <div className="bg-brand-surface min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-heading mb-4">
            Learn from the Best
          </h1>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Get personalized guidance from industry veterans who have walked the path before you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentorsData.map((mentor) => (
            <Card key={mentor.id} hoverEffect className="flex flex-col text-center">
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-heading font-bold text-brand-primary">
                {mentor.name.charAt(0)}
              </div>

              <h3 className="text-xl font-heading font-bold text-brand-heading mb-1">{mentor.name}</h3>
              <p className="text-brand-primary text-sm font-medium mb-1">{mentor.role}</p>
              <div className="flex items-center justify-center gap-1 text-xs text-brand-text mb-4">
                <Briefcase size={12} /> {mentor.company}
              </div>

              <p className="text-brand-text text-sm mb-6 flex-grow">{mentor.bio}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {mentor.expertise.map((skill) => (
                  <span key={skill} className="bg-brand-surface text-brand-heading text-xs px-2 py-1 rounded border border-brand-border">
                    {skill}
                  </span>
                ))}
              </div>

              <Button variant="primary" className="w-full gap-2">
                <Calendar size={16} /> Book a Session
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}