import { Component, input, InputSignal } from '@angular/core';
import { Experience } from '../../../interfaces/experience.interface';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
  experience: InputSignal<Experience> = input.required<Experience>();
}
