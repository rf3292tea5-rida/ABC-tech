import { Button } from "@/components/common/Button";
import { ArrowRight, Play } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-primary py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Start Your Tech Career?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Take our career assessment and find the perfect path for you today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-brand-primary hover:bg-white/90"
            >
              Start Assessment
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              Watch Demo
              <Play className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
