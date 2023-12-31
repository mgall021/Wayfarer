import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, RouterModule} from '@angular/router';
import { cities } from './cities';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit{
    cityIndex: string | null = "";
    city: any;

    constructor(private route: ActivatedRoute){ }

    ngOnInit(): void {
      this.route.paramMap
      .subscribe( params => {
        this.city = cities.find( city =>{
          let paramId: string = params.get("id") || "";
          city.posts = city.posts.sort((post1: any, post2: any) => post1.date + post2.date );
          return city.id === parseInt(paramId);
        })
      })
    }

}
