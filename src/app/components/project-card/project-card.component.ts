import { Component, input, InputSignal } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-project-card',
  imports: [
    RouterLink
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  project: InputSignal<Project> = input.required<Project>();
}
