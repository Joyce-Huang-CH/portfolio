import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';
// import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, HeaderComponent, CardComponent, TranslateModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // constructor(private translate: TranslateService) {
  //   this.translate.setDefaultLang('en-US');
  //   this.translate.use('en-US');
  // }

  // switchLanguage(language: string) {
  //   this.translate.use(language);
  // }
}
