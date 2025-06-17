import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';

@Component({
  selector: 'app-experience',
  imports: [
    ExperienceCardComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public appConfig = AppConfig;
}
