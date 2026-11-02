import { useSEO } from '@/hooks/useSEO';

export function PrivacyPage() {
  useSEO({ title: 'Privacy Policy', description: 'Tech ABC Privacy Policy and data handling practices.' });
  return (
    <div className="bg-brand-surface min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-heading font-bold text-brand-heading mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-brand-text space-y-6">
          <p>Last updated: September 2026</p>
          <p>At Tech ABC, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you use our platform.</p>
          <h2 className="text-2xl font-heading font-bold text-brand-heading mt-8">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, fill out a contact form, or enroll in a course.</p>
          <h2 className="text-2xl font-heading font-bold text-brand-heading mt-8">2. How We Use Your Information</h2>
          <p>We use the information to provide, maintain, and improve our services, process transactions, and send you technical notices and support messages.</p>
        </div>
      </div>
    </div>
  );
}