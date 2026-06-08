import { Component } from '@angular/core';
import { Link } from '@shared/ui/link/link';
import { Logo } from '@shared/components/logo/logo';
import { Wrapper } from '@shared/ui/wrapper/wrapper';

@Component({
  selector: 'app-header',
  imports: [Logo, Link, Wrapper],
  templateUrl: './header.html',
})
export class Header {}
