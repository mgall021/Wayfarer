import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cities } from '../home/city/cities';

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  city: any;
  post: any;
  constructor(private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        let paramId: string = params.get("id") || "";
        let postId: string = params.get("postId") || "";
        
        this.city = cities.find(city => city.id === parseInt(paramId));
        if (this.city) {
          let posts = this.city.posts;
            this.post = posts.find((post: any) => post.id === parseInt(postId));
            // return 
          }
    });
  }

}
