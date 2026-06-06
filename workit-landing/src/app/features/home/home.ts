import { Component } from '@angular/core';
import { Card } from '@shared/components/card/card';
import { CardNumber } from '@shared/components/card/card-number';
import { CardTitle } from '@shared/components/card/card-title';
import { CardDescription } from '@app/shared/components/card/card-description';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Card, CardNumber, CardTitle, CardDescription],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
