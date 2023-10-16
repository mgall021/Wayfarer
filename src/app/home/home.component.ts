import { Component } from '@angular/core';

import { CityComponent } from './city/city.component';
import { CitylistComponent } from './citylist/citylist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CityComponent, CitylistComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
