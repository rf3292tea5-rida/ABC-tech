import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Download, FileText } from 'lucide-react';

const resources = [
  { id: '1', title: 'Frontend Roadmap PDF', type: 'PDF Guide' },
  { id: '2', title: 'React Cheat Sheet', type: 'Cheat Sheet' },
  { id: '3', title: 'Freelancing Proposal Template', type: 'Template' },
];

export function ResourcesPage() {
  return (
    <div className="bg-brand-surface min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-heading font-bold text-brand-heading mb-8 text-center">Free Resources</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map(res => (
            <Card key={res.id} className="flex flex-col items-center text-center">
              <FileText className="w-10 h-10 text-brand-primary mb-4" />
              <h3 className="text-lg font-bold text-brand-heading mb-2">{res.title}</h3>
              <p className="text-sm text-brand-text mb-4">{res.type}</p>
              <Button variant="outline" className="gap-2"><Download size={14} /> Download</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}