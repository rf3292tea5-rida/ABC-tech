import { useParams, Link } from 'react-router-dom';
import { mentorsData } from '@/pages/Mentors/Mentors.data'; // Import data from Mentors page
import { Button } from '@/components/common/Button';
import { ArrowLeft, Calendar, Briefcase } from 'lucide-react';

export function MentorDetailsPage() {
  const { id } = useParams();
  const mentor = mentorsData.find(m => m.id === id) || mentorsData[0];

  return (
    <div className="bg-brand-surface min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/mentors" className="inline-flex items-center gap-2 text-brand-primary mb-8"><ArrowLeft size={18} /> Back to Mentors</Link>
        <div className="bg-brand-background border border-brand-border rounded-2xl p-8 text-center">
          <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-brand-primary">{mentor.name.charAt(0)}</div>
          <h1 className="text-3xl font-heading font-bold text-brand-heading mb-2">{mentor.name}</h1>
          <p className="text-brand-primary font-medium flex items-center justify-center gap-2 mb-6"><Briefcase size={16} /> {mentor.role} at {mentor.company}</p>
          <p className="text-brand-text max-w-2xl mx-auto mb-8">{mentor.bio}</p>
          <Button variant="primary" className="gap-2"><Calendar size={16} /> Book a 1-on-1 Session</Button>
        </div>
      </div>
    </div>
  );
}