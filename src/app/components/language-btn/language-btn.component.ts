import { Component, importProvidersFrom } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MatCommonModule } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-language-btn',
  standalone: true,
  imports: [MaterialModule, MatCommonModule, TranslateModule],
  templateUrl: './language-btn.component.html',
  styleUrl: './language-btn.component.scss'
})
export class LanguageBtnComponent {
  languages = ['en-US', 'zh-TW'];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en-US');
    this.translate.use('en-US');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
