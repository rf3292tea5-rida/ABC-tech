import { useState } from 'react';
import { Send } from 'lucide-react';

interface AIInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

export function AIInput({ onSend, disabled }: AIInputProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !disabled) {
      onSend(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-3 border-t border-brand-border bg-brand-background">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask about careers, courses..."
        disabled={disabled}
        className="flex-grow px-3 py-2 text-sm rounded-lg border border-brand-border bg-brand-surface text-brand-heading focus:outline-none focus:ring-2 focus:ring-brand-primary/50 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={disabled || !text.trim()}
        className="bg-brand-primary text-white p-2 rounded-lg hover:bg-brand-primaryDark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={16} />
      </button>
    </form>
  );
}