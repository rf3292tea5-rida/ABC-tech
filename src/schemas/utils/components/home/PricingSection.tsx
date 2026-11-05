import { Button } from '@/components/common/Button';
import { ArrowRight, Check } from 'lucide-react';

export function PricingSection() {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      features: [
        'Access to 50+ courses',
        'Career assessment',
        'Community support',
        'Monthly progress reports',
      ],
    },
    {
      name: 'Pro',
      price: '$79',
      period: '/month',
      features: [
        'Access to all 200+ courses',
        'Priority career assessment',
        '1-on-1 mentorship',
        'Industry certifications',
        'Job placement support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      features: [
        'Everything in Pro',
        'Team management',
        'Custom learning paths',
        'Dedicated account manager',
        'API access',
      ],
    },
  ];

  return (
    <section className="bg-brand-surface py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-heading mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Flexible pricing for every learner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-brand-background border border-brand-border rounded-xl p-8 hover:shadow-lg transition-shadow ${plan.popular ? 'ring-2 ring-brand-primary' : ''}`}>
              {plan.popular && (
                <div className="inline-block bg-brand-primary text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading font-bold text-brand-heading mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-heading font-bold text-brand-heading">{plan.price}</span>
                <span className="text-brand-text">{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-brand-primary" />
                    <span className="text-brand-text">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant={plan.popular ? 'primary' : 'outline'} size="lg" className="w-full">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Compare All Plans
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}