import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Project } from '../../project';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  projects: Project[] = [
    {
      imageUrl: './assets/img/project-cover/cover-1.png',
      title: 'Rock Mobile Corporation Official website',
      date: '12/2024',
      link: '#'
    },
    {
      imageUrl: './assets/img/project-cover/cover-2.png',
      title: 'TÉO RAVET PHOTOGRAPHY PORTFOLIO-JOURNAL',
      date: '12/2024',
      link: '#'
    },
    {
      imageUrl: './assets/img/project-cover/cover-3.png',
      title: 'TÉO RAVET PHOTOGRAPHY PORTFOLIO-JOURNAL',
      date: '12/2024',
      link: '#'
    },
    {
      imageUrl: './assets/img/project-cover/cover-4.png',
      title: 'TÉO RAVET PHOTOGRAPHY PORTFOLIO-JOURNAL',
      date: '12/2024',
      link: '#'
    }
  ];
}
