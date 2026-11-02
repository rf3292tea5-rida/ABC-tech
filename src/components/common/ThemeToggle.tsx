import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  const currentOption = options.find(opt => opt.value === theme) || options[2];
  const CurrentIcon = currentOption.icon;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-surface border border-brand-border text-brand-heading hover:bg-brand-border/20 transition-colors"
        aria-label="Toggle theme"
      >
        <CurrentIcon size={18} />
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Invisible backdrop to close dropdown */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
          
          <div className="absolute right-0 mt-2 w-32 bg-brand-surface border border-brand-border rounded-lg shadow-lg z-20 overflow-hidden">
            {options.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.value}
                  onClick={() => {
                    setTheme(option.value as any);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-brand-border/20 transition-colors ${
                    theme === option.value ? 'text-brand-primary font-bold' : 'text-brand-text'
                  }`}
                >
                  <Icon size={16} />
                  {option.label}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}