import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function Card({
  children,
  hoverEffect = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`
  bg-brand-surface border border-brand-border rounded-xl p-6 
  transition-all duration-300 ease-in-out transform
  ${hoverEffect ? "hover:shadow-xl hover:-translate-y-2 hover:border-brand-primary/30" : ""}
  ${className}
`}
      {...props}
    >
      {children}
    </div>
  );
}
