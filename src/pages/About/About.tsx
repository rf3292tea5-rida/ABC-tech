import { useSEO } from '@/hooks/useSEO';
import { Card } from '@/components/common/Card';
import { Target, Users, Globe } from 'lucide-react';

export function AboutPage() {
  useSEO({ title: 'About Us', description: 'Learn about Tech ABC and our mission to build the digital future of Gilgit Baltistan.' });
  return (
    <div className="bg-brand-surface min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-heading mb-4">About Tech ABC</h1>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            We don't just teach you technology. We help you find where you belong in technology and give you a path to get there.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <Target className="w-10 h-10 text-brand-primary mb-4" />
            <h3 className="text-xl font-heading font-bold text-brand-heading mb-2">Our Mission</h3>
            <p className="text-brand-text">To train 10,000 students across Gilgit Baltistan, empowering every household with digital skills that create real income.</p>
          </Card>
          <Card>
            <Users className="w-10 h-10 text-brand-primary mb-4" />
            <h3 className="text-xl font-heading font-bold text-brand-heading mb-2">Our Community</h3>
            <p className="text-brand-text">Building a network of mentors, peers, and innovators who support each other's growth in the tech industry.</p>
          </Card>
          <Card>
            <Globe className="w-10 h-10 text-brand-primary mb-4" />
            <h3 className="text-xl font-heading font-bold text-brand-heading mb-2">Our Vision</h3>
            <p className="text-brand-text">Eradicating poverty and building a self-sustaining digital future for the next generation.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}