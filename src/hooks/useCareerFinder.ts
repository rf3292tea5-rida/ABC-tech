import { useState, useCallback } from 'react';
import { CAREER_FINDER_QUESTIONS, CareerTag, CareerResult } from '@/pages/CareerFinder/CareerFinder.data';
import { calculateCareerRecommendations } from '@/utils/careerRecommendation';

export function useCareerFinder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const totalSteps = CAREER_FINDER_QUESTIONS.length;

  const handleSelectOption = useCallback((questionId: string, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  }, []);

  const handleNext = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  }, [currentStep, totalSteps]);

  const handlePrevious = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const handleReset = useCallback(() => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
  }, []);

  // Derive selected tags from answers
  const selectedTags: CareerTag[] = Object.values(answers).flatMap(optionId => {
    for (const q of CAREER_FINDER_QUESTIONS) {
      const option = q.options.find(opt => opt.id === optionId);
      if (option) return option.tags;
    }
    return [];
  });

  const results: CareerResult[] = isComplete ? calculateCareerRecommendations(selectedTags) : [];

  return {
    currentStep,
    totalSteps,
    currentQuestion: CAREER_FINDER_QUESTIONS[currentStep],
    answers,
    isComplete,
    results,
    handleSelectOption,
    handleNext,
    handlePrevious,
    handleReset,
    canProceed: !!answers[CAREER_FINDER_QUESTIONS[currentStep].id]
  };
}