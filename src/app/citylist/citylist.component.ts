import { NgFor } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { cities } from '../home/city/cities';

@Component({
  selector: 'app-citylist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css'],
})
export class CitylistComponent implements OnInit {
  cityIndex: string | null = '';
  cities: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.cities = cities;
      return cities;
    });
  }
}
