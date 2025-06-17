import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { EducationCardComponent } from '../../components/education-card/education-card.component';

@Component({
  selector: 'app-education',
  imports: [
    EducationCardComponent
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  public appConfig = AppConfig;
}
