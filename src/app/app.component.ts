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
    translate.setDefaultLang('en-us');
    translate.use('en-us');
  } 

  ngOnInit(): void {
    console.log(`Surprise! You found the Easter egg! (°ω°ฅ)*`)
    console.log(`Let's chat! https://www.linkedin.com/in/joyce-huang-ch/`)
  }
}
