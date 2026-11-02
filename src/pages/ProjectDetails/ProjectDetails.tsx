import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { projectDetailsData } from './ProjectDetails.data';
import { ArrowLeft, CheckCircle, Code, Clock, Layers } from 'lucide-react';

export function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projectDetailsData; // In a real app, find by ID

  return (
    <div className="bg-brand-surface min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/projects" className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primaryDark mb-8 font-medium">
          <ArrowLeft size={18} /> Back to Projects
        </Link>

        <div className="bg-brand-background border border-brand-border rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${
              project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
              project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {project.difficulty}
            </span>
            <div className="flex items-center gap-1 text-sm text-brand-text">
              <Clock size={14} /> {project.estimatedTime}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-heading mb-4">{project.title}</h1>
          <p className="text-xl text-brand-text">{project.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <h2 className="text-2xl font-heading font-bold text-brand-heading mb-4">Project Overview</h2>
              <p className="text-brand-text leading-relaxed">{project.overview}</p>
            </Card>

            <Card>
              <h2 className="text-2xl font-heading font-bold text-brand-heading mb-6">Step-by-Step Guide</h2>
              <div className="space-y-6">
                {project.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-brand-heading text-lg">{step.title}</h3>
                      <p className="text-brand-text">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <h3 className="font-heading font-bold text-brand-heading mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-brand-surface text-brand-heading text-xs px-3 py-1.5 rounded-md border border-brand-border flex items-center gap-1">
                    <Layers size={12} /> {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card>
              <h3 className="font-heading font-bold text-brand-heading mb-4">Prerequisites</h3>
              <ul className="space-y-3">
                {project.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-text">
                    <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </Card>

            <div className="bg-brand-primary rounded-xl p-6 text-center text-white">
              <h3 className="font-heading font-bold text-xl mb-2">Ready to build?</h3>
              <p className="text-white/80 text-sm mb-6">Start coding this project today.</p>
              <Button variant="secondary" className="w-full gap-2">
                <Code size={16} /> Start Building
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}