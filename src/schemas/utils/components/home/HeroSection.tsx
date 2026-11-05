import { Button } from '@/components/common/Button';
import { ArrowRight, Play, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  // Simple check: has the book played in this session?
  const hasPlayedIntro = sessionStorage.getItem('tech-abc-intro-played') === 'true';

  // Choose the classes based on the check
  const anim1 = hasPlayedIntro ? 'hero-anim-1-instant' : 'hero-anim-1';
  const anim2 = hasPlayedIntro ? 'hero-anim-2-instant' : 'hero-anim-2';
  const anim3 = hasPlayedIntro ? 'hero-anim-3-instant' : 'hero-anim-3';
  const anim4 = hasPlayedIntro ? 'hero-anim-4-instant' : 'hero-anim-4';
  const handwritingClass = hasPlayedIntro ? 'hero-handwritten-instant' : 'hero-handwritten';

  // ... rest of your return statement remains exactly the same ...

  return (
    <section className="relative overflow-hidden bg-brand-surface py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5"></div>
      <div className="relative container mx-auto px-4 text-center max-w-4xl">
        
        {/* Badge */}
        <div className={`${anim1} inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4 py-2 mb-6`}>
          <Play className="w-4 h-4 text-brand-primary" />
          <span className="text-sm font-medium text-brand-primary">Find Your Career Path</span>
        </div>

        {/* Title */}
        <h1 className={`${anim2} text-4xl md:text-6xl font-heading font-bold text-brand-heading mb-6 leading-tight`}>
          Discover Your Future in <span className="text-brand-primary">Tech</span>
        </h1>

        {/* Pen Writing Effect */}
        <div className={`${anim3} flex justify-center mb-8 overflow-hidden`}>
          {/* UPDATED: Uses the dynamic handwriting class */}
          <div className={handwritingClass}>
            Take our career assessment and find the perfect tech path for you.
          </div>
        </div>

        {/* Buttons */}
        <div className={`${anim4} flex flex-col sm:flex-row gap-4 justify-center`}>
          <Link to="/find-your-path">
            <Button variant="primary" className="gap-2">Start Assessment <ArrowRight className="w-5 h-5" /></Button>
          </Link>
          <Link to="/courses">
            <Button variant="outline" className="gap-2">Explore Courses <BookOpen className="w-5 h-5" /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
}