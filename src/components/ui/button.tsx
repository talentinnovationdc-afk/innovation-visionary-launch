import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 touch-manipulation",
  {
    variants: {
      variant: {
        // Primary: Solid cyan, strong contrast, clear hover
        default:
          "bg-primary text-primary-foreground hover:brightness-110 active:brightness-95 shadow-[var(--shadow-glow-cyan)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]",
        // Secondary: Outline cyan, transparent fill
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 hover:shadow-[var(--shadow-glow-cyan)]",
        // Tertiary: Text link cyan
        link: "text-primary underline-offset-4 hover:underline hover:brightness-110 p-0 h-auto",
        // Utility variants
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-foreground",
        // Glass for special cases
        glass:
          "glass text-foreground hover:border-primary/40",
      },
      size: {
        // Larger touch targets on mobile
        default: "h-12 px-6 py-3 min-w-[44px]",
        sm: "h-10 rounded-md px-4 min-w-[44px]",
        lg: "h-14 rounded-lg px-8 text-base min-w-[44px]",
        icon: "h-12 w-12 min-w-[44px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
