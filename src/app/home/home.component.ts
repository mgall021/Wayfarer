import { Component } from '@angular/core';

import { CitylistComponent } from '../citylist/citylist.component';
import { CityComponent } from './city/city.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CityComponent, CitylistComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
