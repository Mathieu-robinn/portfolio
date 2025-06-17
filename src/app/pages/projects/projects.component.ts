import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public appConfig = AppConfig;

  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller) {}
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const targetId = params['target'];
      if (targetId) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(targetId);
        }, 0);
      }
    });
  }
}
