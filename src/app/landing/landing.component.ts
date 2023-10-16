import { Component } from '@angular/core';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from './carousel/carousel.component';
import { WayfarerDescriptionComponent } from './wayfarer-description/wayfarer-description.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CarouselComponent, NgbCarouselModule, WayfarerDescriptionComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {}
