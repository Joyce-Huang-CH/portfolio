import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Project } from '../../project';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule, TranslateModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  projects: Project[] = [
    {
      imageUrl: './assets/img/project-cover/cover-2.webp',
      title: 'Light-morning Technology Co., Ltd. Official Website',
      tools: ['Vue.js', 'Figma', 'Adobe PS', 'Adobe AI'],
      link: 'https://light-morning.com/'
    },
    {
      imageUrl: './assets/img/project-cover/cover-3.webp',
      title: 'Skywin Technology Co., Ltd. Official Website',
      tools: ['Vue.js', 'Adobe XD', 'Adobe PS', 'Adobe AI'],
      link: 'https://skywin.app/'
    },
    {
      imageUrl: './assets/img/project-cover/cover-1.webp',
      title: 'Rock Mobile Corporation Official Website',
      tools: ['Adobe XD', 'Adobe PS', 'Adobe AI'],
      link: 'https://www.rockmobile.com/index.html'
    },
    {
      imageUrl: './assets/img/project-cover/cover-4.webp',
      title: 'Cloud-wave Cloud Co., Ltd. Official Website',
      tools: ['Vue.js', 'Figma', 'Adobe PS', 'Adobe AI'],
      link: 'https://cloudwave.com.tw/'
    }
  ];

  getToolClass(tools: string[]): string {
    if (tools.includes('Adobe XD')) return 'tool-adobe-xd';
    if (tools.includes('Adobe PS')) return 'tool-adobe-ps';
    return '';
  }

  goToLink(url: any){
    window.open(url, '_blank');
  }
}
