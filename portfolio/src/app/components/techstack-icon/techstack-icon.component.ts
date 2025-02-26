import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'techstack-icon',
  standalone: true,
  imports: [],
  templateUrl: './techstack-icon.component.html',
  styleUrl: './techstack-icon.component.css'
})
export class TechstackIconComponent implements OnInit {
  @Input('title') title: string = 'Lorem ipsum';
  public img_filename: string | null = null;
  ngOnInit(): void {
    this.img_filename = this.title.replaceAll(/([' ']|['/'])+/g, '_')
  }
  
}
