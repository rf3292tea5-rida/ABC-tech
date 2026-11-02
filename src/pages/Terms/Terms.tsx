import { useSEO } from '@/hooks/useSEO';

export function TermsPage() {
  useSEO({ title: 'Terms of Service', description: 'Tech ABC Terms of Service and user agreements.' });
  return (
    <div className="bg-brand-surface min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-heading font-bold text-brand-heading mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-brand-text space-y-6">
          <p>Last updated: September 2026</p>
          <p>Welcome to Tech ABC. By accessing our website, you agree to be bound by these Terms of Service.</p>
          <h2 className="text-2xl font-heading font-bold text-brand-heading mt-8">1. Acceptance of Terms</h2>
          <p>By using Tech ABC, you agree to comply with and be bound by these terms. If you do not agree, please do not use our services.</p>
          <h2 className="text-2xl font-heading font-bold text-brand-heading mt-8">2. Intellectual Property</h2>
          <p>All content, courses, and materials on Tech ABC are the property of Tech ABC and are protected by copyright laws.</p>
        </div>
      </div>
    </div>
  );
}