import { Component, importProvidersFrom } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MatCommonModule } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

interface Language {
  code: string;
  name: string;
}

@Component({
  selector: 'app-language-btn',
  standalone: true,
  imports: [MaterialModule, MatCommonModule, TranslateModule],
  templateUrl: './language-btn.component.html',
  styleUrl: './language-btn.component.scss'
})
export class LanguageBtnComponent {
  languages: Language[] = [
    { code: 'en-us', name: 'English' },
    { code: 'zh-tw', name: '繁體中文' }
  ];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en-us');
    this.translate.use('en-us');
  }

  switchLanguage(langCode: string) {
    this.translate.use(langCode);
  }

  getCurrentLanguageName() {
    return this.languages.find(lang => lang.code === this.translate.currentLang)?.name;
  }
}
