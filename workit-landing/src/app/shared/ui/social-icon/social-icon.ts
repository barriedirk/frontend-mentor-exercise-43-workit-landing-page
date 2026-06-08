import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  imports: [],
  templateUrl: './social-icon.html',
})
export class SocialIcon {
  name = input.required<'facebook' | 'instagram' | 'twitter'>();
  url = input<string>('#');
  customClass = input<string>('', { alias: 'class' });

  iconClasses = computed(() => {
    const base =
      'w-[20px] h-[20px] transition-colors duration-200 fill-[#5A5360] group-hover:fill-white';

    return `${base} ${this.customClass()}`;
  });
}
