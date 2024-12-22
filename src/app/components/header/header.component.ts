import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { LanguageBtnComponent } from '../language-btn/language-btn.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, LanguageBtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
