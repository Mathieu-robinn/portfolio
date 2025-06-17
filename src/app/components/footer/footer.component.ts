import { Component } from '@angular/core';
import { RoutesData } from '../../../enums/routes-data.enum';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    RouterLink, RouterLinkActive
  ]
})
export class FooterComponent {
  Routes = RoutesData;
  currentYear: number = new Date().getFullYear();
}
