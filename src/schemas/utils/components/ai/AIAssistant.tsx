import { useState } from 'react';
import { MessageCircle, X, Minimize2 } from 'lucide-react';
import { AIMessage } from './AIMessage';
import { AIInput } from './AIInput';
import { sendChatMessage, ChatMessage } from '@/services/ai/ai.service';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hi! I'm your Tech ABC Career Assistant. Ask me about career paths, courses, or how to get started in tech!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (text: string) => {
    const userMessage: ChatMessage = { role: 'user', content: text };
    const newHistory = [...messages, userMessage];
    
    setMessages(newHistory);
    setIsLoading(true);

    try {
      const data = await sendChatMessage(text, messages);
      const aiMessage: ChatMessage = { role: 'assistant', content: data.response };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <div className="w-80 sm:w-96 bg-brand-surface border border-brand-border rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-brand-primary p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={16} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm">Career Assistant</h3>
                <p className="text-xs text-white/70">Always here to help</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsMinimized(true)} className="hover:bg-white/10 p-1 rounded transition-colors">
                <Minimize2 size={16} />
              </button>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-80 overflow-y-auto p-4 bg-brand-surface">
            {messages.map((msg, index) => (
              <AIMessage key={index} role={msg.role} content={msg.content} />
            ))}
            {isLoading && (
              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0">
                  <Bot size={16} />
                </div>
                <div className="bg-brand-background border border-brand-border p-3 rounded-xl rounded-tl-none flex items-center gap-1">
                  <div className="w-2 h-2 bg-brand-text rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-brand-text rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-brand-text rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <AIInput onSend={handleSend} disabled={isLoading} />
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 ${
          isOpen ? 'bg-brand-secondary text-brand-heading' : 'bg-brand-primary text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}