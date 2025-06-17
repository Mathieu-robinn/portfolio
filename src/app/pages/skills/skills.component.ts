import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { SkillCardComponent } from '../../components/skill-card/skill-card.component';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-skills',
  imports: [
    SkillCardComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
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
