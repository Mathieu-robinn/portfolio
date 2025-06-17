import { Component, input, InputSignal } from '@angular/core';
import { Experience } from '../../../interfaces/experience.interface';
import { Education } from '../../../interfaces/education.interface';

@Component({
  selector: 'app-education-card',
  imports: [],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.scss'
})
export class EducationCardComponent {
  education: InputSignal<Education> = input.required<Education>();
}
