import React from "react";

type Props = { variant?: "full" | "mark"; className?: string };

const FullLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 800 180" role="img" aria-label="The Better Half Property Co" {...props}>
    {/* Icon - Split square */}
    <g transform="translate(0, 30)">
      <rect x="0" y="0" width="55" height="120" rx="4" fill="#14b8a6"/>
      <rect x="55" y="0" width="55" height="120" rx="4" fill="#0d9488"/>
    </g>
    
    {/* Text */}
    <g transform="translate(140, 0)" fill="currentColor">
      <text x="0" y="50" fontFamily="Montserrat, sans-serif" fontSize="50" fontWeight="800" letterSpacing="2" fill="#0f172a">
        THE
      </text>
      <text x="0" y="95" fontFamily="Montserrat, sans-serif" fontSize="50" fontWeight="800" letterSpacing="2" fill="#0f172a">
        BETTER
      </text>
      <text x="0" y="140" fontFamily="Montserrat, sans-serif" fontSize="50" fontWeight="800" letterSpacing="2" fill="#0f172a">
        HALF
      </text>
      <text x="0" y="170" fontFamily="Montserrat, sans-serif" fontSize="24" fontWeight="400" letterSpacing="4" fill="#0f172a">
        PROPERTY CO.
      </text>
    </g>
  </svg>
);

const Mark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 120" role="img" aria-label="The Better Half mark" {...props}>
    <rect x="5" y="5" width="50" height="110" rx="4" fill="#14b8a6"/>
    <rect x="55" y="5" width="50" height="110" rx="4" fill="#0d9488"/>
  </svg>
);

export default function Logo({ variant = "full", className }: Props) {
  const Comp = variant === "full" ? FullLogo : Mark;
  return <Comp className={className} />;
}
