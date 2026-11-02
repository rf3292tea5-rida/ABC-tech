import {
  CareerTag,
  CAREER_PROFILES,
  CareerResult,
} from "@/pages/CareerFinder/CareerFinder.data";

/**
 * Pure function to calculate career recommendations.
 * Takes an array of selected tags and returns sorted career profiles with match scores.
 */
export function calculateCareerRecommendations(
  selectedTags: CareerTag[],
): CareerResult[] {
  if (selectedTags.length === 0) return [];

  // Calculate match score for each career profile
  const scoredCareers = CAREER_PROFILES.map((career) => {
    let matchCount = 0;
    selectedTags.forEach((tag) => {
      if (career.tags.includes(tag)) {
        matchCount++;
      }
    });

    // Score is a percentage of how many of the user's tags match this career's tags
    // We add a small base score to avoid 0% matches for partially relevant careers
    const score = Math.round((matchCount / selectedTags.length) * 100);

    return {
      ...career,
      matchScore: score,
    };
  });

  // Sort by highest match score descending, then filter out very low matches (< 30%)
  return scoredCareers
    .filter((career) => career.matchScore >= 30)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3); // Return top 3 matches
}
