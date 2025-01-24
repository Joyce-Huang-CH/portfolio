import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    TranslateModule,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en-us', 'zh-tw']);
    translate.setDefaultLang('en-us');
    
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en-us|zh-tw/) ? browserLang : 'en-us');
  } 

  ngOnInit(): void {
    console.log(`Surprise! You found the Easter egg! (°ω°ฅ)*`)
    console.log(`Let's chat! https://www.linkedin.com/in/joyce-huang-ch/`)
  }
}
