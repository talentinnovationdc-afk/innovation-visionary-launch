import { Zap } from "lucide-react";

export const AiBadge = () => {
  return (
    <span 
      className="ai-badge inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full
        bg-[rgba(255,255,255,0.04)] 
        border border-primary/25
        shadow-[0_0_20px_rgba(102,252,241,0.2)]
        text-primary font-extrabold uppercase
        text-lg md:text-2xl lg:text-3xl"
      style={{ 
        letterSpacing: '0.12em',
        background: 'linear-gradient(135deg, rgba(102,252,241,0.06) 0%, rgba(189,0,255,0.04) 100%)'
      }}
    >
      <Zap className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
      Díky AI
    </span>
  );
};
