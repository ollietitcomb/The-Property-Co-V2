import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-brand-ink/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}

