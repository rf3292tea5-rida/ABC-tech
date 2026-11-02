import { Link } from 'react-router-dom';
import { Card } from '@/components/common/Card';
import { Calendar, User } from 'lucide-react';

const blogPosts = [
  { id: '1', title: 'How to Start Coding in 2026', excerpt: 'A complete guide for absolute beginners...', author: 'Sarah J.', date: 'Sep 2026' },
  { id: '2', title: 'The Future of AI in Gilgit Baltistan', excerpt: 'How local developers are leveraging AI...', author: 'Michael C.', date: 'Aug 2026' },
  { id: '3', title: '5 Projects to Get Hired', excerpt: 'Build these to stand out to recruiters...', author: 'Emily R.', date: 'Jul 2026' },
];

export function BlogPage() {
  return (
    <div className="bg-brand-surface min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-heading font-bold text-brand-heading mb-8 text-center">Tech ABC Blog</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <Card hoverEffect className="h-full">
                <h3 className="text-xl font-bold text-brand-heading mb-2">{post.title}</h3>
                <p className="text-brand-text text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-brand-text">
                  <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}