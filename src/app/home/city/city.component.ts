import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cities } from './cities';

@Component({
  selector: 'app-city',
  standalone: true,
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
          return city.id === parseInt(paramId);
        })
      })
    }

}
