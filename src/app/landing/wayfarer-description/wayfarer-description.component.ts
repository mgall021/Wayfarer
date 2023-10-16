import { Component } from '@angular/core';

@Component({
  selector: 'app-wayfarer-description',
  standalone: true,
  templateUrl: './wayfarer-description.component.html',
  styleUrls: ['./wayfarer-description.component.css'],

})
export class WayfarerDescriptionComponent {
topics = [{
  title: "Weather Api Project", 
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor."
},
  {
    title: "a collaborative project",
    body:  "mention our names"
  },
{
  title:"Agile based project done in sprints",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor."
}
]
}
