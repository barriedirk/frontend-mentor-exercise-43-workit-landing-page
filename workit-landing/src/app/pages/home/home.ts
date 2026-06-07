import { Component } from '@angular/core';
import { Card } from '@shared/components/card/card';
import { CardNumber } from '@shared/components/card/card-number';
import { CardTitle } from '@shared/components/card/card-title';
import { CardDescription } from '@app/shared/components/card/card-description';
import { FounderCta } from '@app/shared/components/founder-cta/founder-cta';
import { Wrapper } from '@app/shared/ui/wrapper/wrapper';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Card, CardNumber, CardTitle, CardDescription, FounderCta, Wrapper],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
