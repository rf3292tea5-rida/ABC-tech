import { Link } from 'react-router-dom';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { careersData } from './CareerPaths.data';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

export function CareerPathsPage() {
    useSEO({
    title: 'Explore Tech Careers',
    description: 'Discover your perfect technology career path. Browse guides for Frontend, Backend, Cloud, and more at Tech ABC.',
    canonicalUrl: 'https://techabc.com/careers',
  });
  return (
    <div className="bg-brand-surface min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-heading mb-4">
            Explore Tech Careers
          </h1>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Not sure which path is right for you? Browse our comprehensive guides to find your perfect fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careersData.map((career) => (
            <Link to={`/careers/${career.id}`} key={career.id} className="block h-full">
              <Card hoverEffect className="h-full flex flex-col">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <career.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-heading mb-2">{career.title}</h3>
                <p className="text-brand-text text-sm mb-6 flex-grow">{career.description}</p>
                <div className="flex items-center text-brand-primary font-medium text-sm gap-1">
                  Learn more <ArrowRight size={14} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}