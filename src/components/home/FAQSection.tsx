import { Button } from "@/components/common/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const faqs = [
    {
      question: "How does the career assessment work?",
      answer:
        "Our career assessment takes about 15 minutes and evaluates your skills, interests, and goals to recommend the best tech career path for you.",
    },
    {
      question: "Can I learn at my own pace?",
      answer:
        "Absolutely! All our courses are self-paced, so you can learn whenever and wherever works best for you.",
    },
    {
      question: "Are the certifications industry-recognized?",
      answer:
        "Yes, our certifications are recognized by top tech companies and can help you land your dream job.",
    },
    {
      question: "Do you offer job placement support?",
      answer:
        "Yes, our Pro and Enterprise plans include comprehensive job placement support, including resume reviews, interview prep, and direct connections with hiring partners.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-brand-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Everything you need to know
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-brand-border rounded-xl mb-4 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-surface transition-colors"
              >
                <span className="font-heading font-bold text-brand-heading">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-primary transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-brand-text">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">
            Contact Support
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
