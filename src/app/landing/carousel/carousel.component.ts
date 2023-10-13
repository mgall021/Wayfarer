import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})


export class CarouselComponent implements OnInit{ 
  
//grabs the Ul element
gallery: HTMLElement | null = document.querySelector(".js-gallery");
if (gallery: { querySelectorAll: (arg0: string) => NodeListOf<HTMLElement>; }) {
  // Grabs all the children elements
  const galleryItems: NodeListOf<HTMLElement> = gallery.querySelectorAll(".gallery__item");
  // How many images are in the slide to rotate through
  const slideCount: number = 4;
  // Width of all the images
  const slideWidth: number = 1000;
}

ngOnInit(): void { 

}
}




