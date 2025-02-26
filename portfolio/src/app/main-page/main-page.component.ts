import { Component, ViewEncapsulation } from '@angular/core';
import { ContentCardsComponent } from "../components/content-cards/content-cards.component";
import { TechstackIconComponent } from '../components/techstack-icon/techstack-icon.component';
import { LinkCardItem } from '../components/link-card/link-card.models';
import { LinkCardComponent } from '../components/link-card/link-card.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ContentCardsComponent, TechstackIconComponent, LinkCardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  public technologies: string[] = ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS/SASS', 'Angular', 'Ionic', 'SQL', 'NoSQL', 'GIT', 'Linux', 'Bash', 'Windows', 'Java', 'C/C++', 'API calls', 'Debugging', 'ML', 'MITRE', 'Security', 'BPMN/UML', 'Networks'];
  public links : LinkCardItem[] = [];
  constructor(){
    this.links.push(new LinkCardItem('LinkedIn', 'https://www.linkedin.com/in/adrianjobda/', 'fa-brands fa-linkedin-in'))
    this.links.push(new LinkCardItem('GitHub', 'https://github.com/theConsite', 'fa-brands fa-github'))
    this.links.push(new LinkCardItem('CV (ENG)', '/assets/documents/CV_eng_dev.pdf', 'fa-solid fa-file-pdf'))
    this.links.push(new LinkCardItem('CV (PL)', '/assets/documents/CV_Adrian_Jobda.pdf', 'fa-solid fa-file-pdf'))
  }
}
