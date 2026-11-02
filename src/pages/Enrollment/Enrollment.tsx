import { useState } from 'react';
import { Button } from '@/components/common/Button';
import { CheckCircle } from 'lucide-react';

export function EnrollmentPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-brand-surface min-h-screen py-16 flex items-center justify-center">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-brand-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-brand-heading mb-2">Enrollment Request Sent!</h2>
          <p className="text-brand-text">We will contact you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-surface min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-heading font-bold text-brand-heading mb-8 text-center">Enroll in a Course</h1>
        <div className="bg-brand-background border border-brand-border rounded-xl p-8">
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-brand-heading mb-2">Full Name</label>
              <input required type="text" className="w-full px-4 py-3 rounded-lg border border-brand-border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-heading mb-2">Email Address</label>
              <input required type="email" className="w-full px-4 py-3 rounded-lg border border-brand-border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-heading mb-2">Select Course</label>
              <select className="w-full px-4 py-3 rounded-lg border border-brand-border">
                <option>Web Development Bootcamp</option>
                <option>Data Science with Python</option>
                <option>AWS Cloud Practitioner</option>
              </select>
            </div>
            <Button type="submit" variant="primary" className="w-full">Submit Enrollment</Button>
          </form>
        </div>
      </div>
    </div>
  );
}