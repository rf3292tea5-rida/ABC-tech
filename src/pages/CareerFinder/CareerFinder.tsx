import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { useCareerFinder } from "@/hooks/useCareerFinder";
import { CheckCircle2, ArrowRight, ArrowLeft, RefreshCw } from "lucide-react";

export function CareerFinderPage() {
  const {
    currentStep,
    totalSteps,
    currentQuestion,
    answers,
    isComplete,
    results,
    handleSelectOption,
    handleNext,
    handlePrevious,
    handleReset,
    canProceed,
  } = useCareerFinder();

  if (isComplete) {
    return (
      <section className="py-16 bg-brand-surface min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent rounded-full mb-6">
              <CheckCircle2 className="w-8 h-8 text-brand-heading" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-heading mb-4">
              Your Recommended Tech Paths
            </h1>
            <p className="text-brand-text text-lg">
              Based on your answers, here are the top technology careers that
              align with your interests and work style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {results.map((career, index) => (
              <Card
                key={career.id}
                hoverEffect
                className="relative overflow-hidden"
              >
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-brand-accent text-brand-heading text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Top Match
                  </div>
                )}
                <h3 className="text-xl font-heading font-bold text-brand-heading mb-2">
                  {career.title}
                </h3>
                <div className="w-full bg-brand-border h-2 rounded-full mb-4">
                  <div
                    className="bg-brand-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${career.matchScore}%` }}
                  />
                </div>
                <p className="text-brand-text text-sm mb-4">
                  {career.description}
                </p>
                <div className="bg-brand-background p-3 rounded-lg border border-brand-border">
                  <p className="text-sm text-brand-heading font-medium">
                    💡 Why it fits:
                  </p>
                  <p className="text-sm text-brand-text mt-1">
                    {career.whyItFits}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" onClick={handleReset} className="gap-2">
              <RefreshCw size={18} />
              Retake Assessment
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-brand-surface min-h-screen flex flex-col">
      <div className="container mx-auto px-4 max-w-2xl flex-grow flex flex-col">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-brand-text mb-2">
            <span>
              Question {currentStep + 1} of {totalSteps}
            </span>
            <span>
              {Math.round(((currentStep + 1) / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-brand-border h-2 rounded-full">
            <div
              className="bg-brand-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <Card className="mb-8">
          <h2 className="text-2xl font-heading font-bold text-brand-heading mb-6">
            {currentQuestion.question}
          </h2>
          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isSelected = answers[currentQuestion.id] === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() =>
                    handleSelectOption(currentQuestion.id, option.id)
                  }
                  className={`
                    w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center gap-3
                    ${
                      isSelected
                        ? "border-brand-primary bg-brand-primary/5 text-brand-heading font-medium"
                        : "border-brand-border bg-brand-background hover:border-brand-primary/50 text-brand-text"
                    }
                  `}
                >
                  <div
                    className={`
                    w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                    ${isSelected ? "border-brand-primary bg-brand-primary" : "border-brand-text"}
                  `}
                  >
                    {isSelected && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  {option.label}
                </button>
              );
            })}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-auto">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="gap-2"
          >
            <ArrowLeft size={18} />
            Previous
          </Button>

          <Button onClick={handleNext} disabled={!canProceed} className="gap-2">
            {currentStep === totalSteps - 1 ? "See Results" : "Next"}
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
