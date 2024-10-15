import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  introduction = "Hello, I'm";
  name = "Andrew Cogburn";
  aboutMe = " and I am a web dev from Houston, TX.";

  projects = [
    { id: 1, name: 'Cogburn Books', description: 'An e-commerce website hosting language education novellas, built by me using .NET and Angular.'},
    { id: 2, name: 'Biblingo', description: 'A language learning platform where I worked on the flashcard deck business rules.'}
  ];
}
