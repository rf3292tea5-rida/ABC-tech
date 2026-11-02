import { apiClient } from '../api/client';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function sendChatMessage(message: string, history: ChatMessage[]) {
  return apiClient<{ response: string }>('/ai/chat', {
    method: 'POST',
    body: JSON.stringify({ message, history }),
  });
}