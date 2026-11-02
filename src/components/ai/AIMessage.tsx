import { Bot, User } from 'lucide-react';

interface AIMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export function AIMessage({ role, content }: AIMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex gap-3 mb-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isUser ? 'bg-brand-secondary text-white' : 'bg-brand-primary text-white'
      }`}>
        {isUser ? <User size={16} /> : <Bot size={16} />}
      </div>
      <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
        isUser 
          ? 'bg-brand-primary text-white rounded-tr-none' 
          : 'bg-brand-background border border-brand-border text-brand-heading rounded-tl-none'
      }`}>
        {content}
      </div>
    </div>
  );
}