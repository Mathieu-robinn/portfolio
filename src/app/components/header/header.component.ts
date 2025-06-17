import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RoutesData } from '../../../enums/routes-data.enum';


@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  Routes = RoutesData
}
