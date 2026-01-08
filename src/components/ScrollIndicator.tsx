import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
}

export const ScrollIndicator = ({ targetId = "content", className = "" }: ScrollIndicatorProps) => {
  return (
    <a
      href={`#${targetId}`}
      className={`group relative inline-flex flex-col items-center cursor-pointer ${className}`}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute -inset-4 rounded-full bg-primary/10 blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Mouse container */}
      <div className="relative w-8 h-14 rounded-full border-2 border-primary/60 group-hover:border-primary transition-colors duration-300 flex justify-center overflow-hidden shadow-[0_0_20px_rgba(102,252,241,0.3)] group-hover:shadow-[0_0_30px_rgba(102,252,241,0.5)]">
        {/* Animated scroll dot */}
        <motion.div
          className="absolute top-3 w-1.5 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(102,252,241,0.8)]"
          animate={{ 
            y: [0, 16, 0],
            opacity: [1, 0.3, 1],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        
        {/* Inner gradient line */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-0 bg-gradient-to-t from-primary/80 to-transparent"
          animate={{ height: ["0%", "60%", "0%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
      </div>
      
      {/* Animated chevrons below mouse */}
      <div className="mt-3 flex flex-col items-center gap-0.5">
        {[0, 1, 2].map((i) => (
          <motion.svg
            key={i}
            width="16"
            height="8"
            viewBox="0 0 16 8"
            className="text-primary/60 group-hover:text-primary transition-colors"
            animate={{ 
              y: [0, 3, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ 
              duration: 1.2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.15
            }}
          >
            <path
              d="M1 1L8 7L15 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </motion.svg>
        ))}
      </div>
    </a>
  );
};
