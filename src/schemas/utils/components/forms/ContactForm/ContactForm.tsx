import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/schemas/contact.schema';
import { submitContactForm } from '@/services/api/contact.service';
import { Button } from '@/components/common/Button';
import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      await submitContactForm(data);
      setSubmitStatus('success');
      reset();
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-brand-surface border border-brand-primary/20 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-brand-primary mx-auto mb-4" />
        <h3 className="text-xl font-heading font-bold text-brand-heading mb-2">Message Sent!</h3>
        <p className="text-brand-text mb-6">Thank you for reaching out. We will get back to you within 24 hours.</p>
        <Button variant="outline" onClick={() => setSubmitStatus('idle')}>Send Another Message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
          <AlertCircle size={18} />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-heading mb-2">Full Name</label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="w-full px-4 py-3 rounded-lg border border-brand-border bg-brand-background text-brand-heading focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-heading mb-2">Email Address</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full px-4 py-3 rounded-lg border border-brand-border bg-brand-background text-brand-heading focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-brand-heading mb-2">Subject</label>
        <input
          id="subject"
          type="text"
          {...register('subject')}
          className="w-full px-4 py-3 rounded-lg border border-brand-border bg-brand-background text-brand-heading focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary"
          placeholder="How can we help?"
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-heading mb-2">Message</label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className="w-full px-4 py-3 rounded-lg border border-brand-border bg-brand-background text-brand-heading focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary resize-none"
          placeholder="Tell us more about your inquiry..."
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}