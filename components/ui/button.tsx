import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide',
  {
    variants: {
      variant: {
        default:
          'bg-white shadow-[0_5px_0_#e2e8f0] text-black border-2 border-slate-200 transition active:shadow-none active:translate-y-[5px] hover:bg-slate-100 hover:text-slate-600',
        primary:
          'bg-sky-400 shadow-[0_5px_0_#0ea5e9] text-primary-foreground transition active:shadow-none active:translate-y-[5px] hover:bg-sky-400/90',
        primaryOutline: 'bg-white text-sky-500 transition hover:bg-slate-100',
        secondary:
          'bg-green-500 shadow-[0_5px_0_#16a34a] text-primary-foreground transition active:shadow-none active:translate-y-[5px] hover:bg-green-500/90',
        secondaryOutline: 'bg-white text-green-500 transition hover:bg-slate-100',
        danger:
          'bg-rose-500 shadow-[0_5px_0_#e11d48] text-primary-foreground transition active:shadow-none active:translate-y-[5px] hover:bg-rose-500/90',
        dangerOutline: 'bg-white text-rose-500 transition hover:bg-slate-100',
        super:
          'bg-indigo-500 shadow-[0_5px_0_#4f46e5] text-primary-foreground transition active:shadow-none active:translate-y-[5px] hover:bg-indigo-500/90',
        superOutline: 'bg-white text-indigo-500 transition hover:bg-slate-100',
        ghost:
          'bg-transparent text-slate-500 border-transparent border-0 transition hover:bg-slate-100',
        sidebar:
          'bg-transparent text-slate-500 border-2 border-transparent transition-none hover:bg-slate-100',
        sidebarOutline:
          'bg-sky-500/15 text-sky-500 border-sky-300 border-2 transition-none hover:bg-sky-500/20',
        locked:
          'bg-neutral-200 text-primary-foreground hover:bg-neutral-200/90 border-neutral-400 border-b-4 active:border-b-0',
      },
      size: {
        default: 'h-11 px-4 py-2',
        xs: 'h-6 px-2',
        sm: 'h-9 px-3',
        lg: 'h-12 px-8',
        icon: 'h-10 w-10',
        rounded: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);

Button.displayName = 'Button';

// Card

const cardButtonVariant = cva(
  'ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide',
  {
    variants: {
      variant: {
        default:
          'relative bg-white shadow-[0_5px_0_#e2e8f0] text-black border-2 border-slate-200 active:shadow-none active:translate-y-[5px] hover:bg-slate-100 hover:text-slate-600',
      },
      size: {
        default: 'h-11 px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface CardButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cardButtonVariant> {
  asChild?: boolean;
}

const CardButton = React.forwardRef<HTMLButtonElement, CardButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(cardButtonVariant({ className }))} ref={ref} {...props} />;
  }
);
CardButton.displayName = 'CardButton';

export { Button, CardButton, buttonVariants, cardButtonVariant };
