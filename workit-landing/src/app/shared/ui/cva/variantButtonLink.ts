import { cva, VariantProps } from 'class-variance-authority';

export const buttonLinkVariants = cva(
  'inline-flex items-center justify-center font-sans font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24053E] disabled:pointer-events-none disabled:opacity-50 w-fit',
  {
    variants: {
      variant: {
        primary:
          'bg-[#44FFA1] text-[#24053E] hover:bg-transparent hover:text-[#44FFA1] border-2 border-[#44FFA1]',
        secondary:
          'bg-transparent text-[#44FFA1] border-2 border-[#44FFA1] hover:bg-[#44FFA1] hover:text-[#24053E]',
        link: 'bg-transparent text-[#44FFA1] border-b-2 border-[#44FFA1] hover:text-white hover:border-white pb-1 rounded-none font-bold tracking-wide',
        transparent:
          'bg-transparent text-slate-900 hover:text-green border border-transparent hover:border-green font-sans font-bold rounded-full transition-colors duration-300 text-center inline-block',
        icon: 'bg-transparent text-slate-900 hover:text-green border border-transparent hover:border-green font-sans font-bold rounded-full transition-colors duration-300 text-center inline-block',
      },
      size: {
        md: 'px-6 py-3 text-base tracking-fit',
        link: 'p-0 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export type ButtonLinkVariantProps = VariantProps<typeof buttonLinkVariants>;
