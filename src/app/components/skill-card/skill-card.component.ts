import { Component, input, InputSignal } from '@angular/core';
import { Skill } from '../../../interfaces/skill-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skill-card',
  imports: [
    RouterLink,
  ],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  skill: InputSignal<Skill> = input.required<Skill>();
}
