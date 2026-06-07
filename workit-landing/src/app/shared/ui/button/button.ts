import { Component, computed, input } from '@angular/core';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-sans font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24053E] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-[#44FFA1] text-[#24053E] hover:bg-transparent hover:text-[#44FFA1] border-2 border-[#44FFA1]',
        secondary:
          'bg-transparent text-[#44FFA1] border-2 border-[#44FFA1] hover:bg-[#44FFA1] hover:text-[#24053E]',
        link: 'bg-transparent text-[#44FFA1] border-b-2 border-[#44FFA1] hover:text-white hover:border-white pb-1 rounded-none font-bold tracking-wide',
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

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  variant = input<ButtonVariantProps['variant']>('primary');
  size = input<ButtonVariantProps['size']>('md');
  customClass = input<string>('', { alias: 'class' });

  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);
  ariaLabel = input<string | null>(null, { alias: 'aria-label' });

  derivedSize = computed(() =>
    this.variant() === 'link' ? 'link' : this.size(),
  );

  classes = computed(() =>
    buttonVariants({
      variant: this.variant(),
      size: this.derivedSize(),
      class: this.customClass(),
    }),
  );
}
