import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  // Replace the baseStyles constant with this:
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-380 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:scale-100";
  const variants = {
    primary:
      "bg-brand-primary text-white hover:bg-brand-primaryDark focus:ring-brand-primary",
    secondary:
      "bg-brand-accent text-brand-heading hover:bg-brand-accentDark focus:ring-brand-accent",
    outline:
      "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/5 focus:ring-brand-primary",
    ghost:
      "text-brand-text hover:text-brand-primary hover:bg-brand-surface focus:ring-brand-primary",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
