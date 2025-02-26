import { Component, Input } from '@angular/core';
import { LinkCardItem } from './link-card.models';

@Component({
  selector: 'link-card',
  standalone: true,
  imports: [],
  templateUrl: './link-card.component.html',
  styleUrl: './link-card.component.css'
})
export class LinkCardComponent {
  @Input('item') item: LinkCardItem | null = null;
  openUrl(){
    window.open(this.item?.url, '_blank')
  }
}
