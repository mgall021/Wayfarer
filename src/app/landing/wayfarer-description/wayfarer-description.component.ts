import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-wayfarer-description',
  standalone: true,
  imports: [NgFor],
  templateUrl: './wayfarer-description.component.html',
  styleUrls: ['./wayfarer-description.component.css'],

})
export class WayfarerDescriptionComponent {
topics = [{
  title: "Weather Api Project", 
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor."
},
  {
    title: "A collaborative project",
    body:  "mention our names Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor."
  },
{
  title:"Agile based project done in sprints",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor."
}
]
}
