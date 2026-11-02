import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function BlogDetailsPage() {
  const { id } = useParams();
  return (
    <div className="bg-brand-surface min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-primary mb-8"><ArrowLeft size={18} /> Back to Blog</Link>
        <h1 className="text-4xl font-heading font-bold text-brand-heading mb-4">Blog Post {id}</h1>
        <p className="text-brand-text text-lg">This is the full content of the blog post. In a real app, this would be fetched from Sanity CMS.</p>
      </div>
    </div>
  );
}