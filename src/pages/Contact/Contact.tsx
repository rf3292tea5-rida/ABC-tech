import { ContactForm } from '@/components/forms/ContactForm/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactPage() {
  return (
    <section className="py-16 bg-brand-surface min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-heading mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Have a question or want to learn more about Tech ABC? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-brand-background border border-brand-border rounded-xl p-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-brand-background border border-brand-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="font-heading font-bold text-brand-heading">Email Us</h3>
              </div>
              <p className="text-brand-text">contact@techabc.com</p>
            </div>

            <div className="bg-brand-background border border-brand-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="font-heading font-bold text-brand-heading">Call Us</h3>
              </div>
              <p className="text-brand-text">+92 XXX XXXXXXX</p>
            </div>

            <div className="bg-brand-background border border-brand-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="font-heading font-bold text-brand-heading">Visit Us</h3>
              </div>
              <p className="text-brand-text">Gilgit Baltistan, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}