import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Users, MessageCircle, Calendar } from 'lucide-react';

export function CommunityPage() {
  return (
    <div className="bg-brand-surface min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl font-heading font-bold text-brand-heading mb-4">Join the GB Digital Community</h1>
        <p className="text-xl text-brand-text mb-12">Connect with 10,000+ learners, mentors, and tech enthusiasts.</p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card><Users className="w-8 h-8 text-brand-primary mx-auto mb-2" /><h3 className="font-bold">Peer Support</h3></Card>
          <Card><MessageCircle className="w-8 h-8 text-brand-primary mx-auto mb-2" /><h3 className="font-bold">Live Q&A</h3></Card>
          <Card><Calendar className="w-8 h-8 text-brand-primary mx-auto mb-2" /><h3 className="font-bold">Weekly Events</h3></Card>
        </div>
        <Button variant="primary" size="lg">Join Our Discord</Button>
      </div>
    </div>
  );
}