import { env } from '../../config/env.js';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `
You are the Tech ABC Career Assistant. 
Your goal is to help users discover technology careers, understand required skills, and guide them through the Tech ABC platform (Courses, Projects, Mentors).
Keep answers concise, encouraging, and focused on the user's career journey in Gilgit Baltistan and beyond.
If asked about pricing or enrollment, direct them to the /courses or /enrollment pages.
`;

export async function generateAIResponse(history: Message[]): Promise<string> {
  // If no API key is provided, use the smart mock mode for UI testing
  if (!env.OPENAI_API_KEY) {
    return simulateAIResponse(history[history.length - 1].content);
  }

  // REAL AI INTEGRATION (OpenAI example)
  // When you add OPENAI_API_KEY to your .env, this code will run.
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...history],
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('AI Provider Error:', error);
    return "I'm having trouble connecting to my brain right now. Please try again in a moment.";
  }
}

// Smart Mock for testing UI without an API key
function simulateAIResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();
  if (msg.includes('frontend') || msg.includes('web')) return "Frontend development is a fantastic choice! It's highly visual and rewarding. I recommend starting with our 'Complete Web Development Bootcamp' in the Courses section. Would you like to know what skills you need?";
  if (msg.includes('salary') || msg.includes('money') || msg.includes('earn')) return "Tech careers in Gilgit Baltistan and globally offer great earning potential. Freelancers often start at $500-$1000/month and scale up quickly. Our goal is to help you reach that $1000/month milestone through our structured paths.";
  if (msg.includes('course') || msg.includes('learn')) return "We have structured courses for every path. Head over to the /courses page to see our bootcamps. They are project-based so you build a portfolio while you learn!";
  return "That's a great question! As your Tech ABC assistant, I'm here to help you find your path. Could you tell me a bit more about your interests? For example, do you prefer visual design or logical problem solving?";
}