import { Link } from 'react-router-dom';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { projectsData } from './Projects.data';
import { Clock, Layers, ArrowRight } from 'lucide-react';

export function ProjectsPage() {
  return (
    <div className="bg-brand-surface min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-heading mb-4">
            Build Real Projects
          </h1>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Theory is good. Practice is better. Build these projects to solidify your skills and boost your portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <Card key={project.id} hoverEffect className="flex flex-col">
              <div className="flex items-center justify-between mb-4">
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

              <h3 className="text-xl font-heading font-bold text-brand-heading mb-2">{project.title}</h3>
              <p className="text-brand-text text-sm mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-brand-background border border-brand-border text-brand-heading text-xs px-2 py-1 rounded-md flex items-center gap-1">
                    <Layers size={12} /> {tech}
                  </span>
                ))}
              </div>

              <Link to={`/projects/${project.id}`} className="w-full">
                <Button variant="outline" className="w-full gap-2">
                  View Project Details <ArrowRight size={16} />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}