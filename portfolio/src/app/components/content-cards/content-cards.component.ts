import { Component, Input } from '@angular/core';

@Component({
  selector: 'content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-cards.component.html',
  styleUrl: './content-cards.component.scss'
})
export class ContentCardsComponent {
  @Input('title') title: string = ''
}
