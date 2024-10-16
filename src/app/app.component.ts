import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  introduction: string = "Hello, I'm";
  name: string = "Andrew Cogburn";
  aboutMe: string = "a Web Developer from Houston, TX.";

  projects = [
    { id: 1, name: 'Cogburn Books', description: 'An e-commerce website hosting language education novellas, built by me using .NET and Angular.'},
    { id: 2, name: 'Biblingo', description: 'A language learning platform where I worked on the flashcard deck business rules.'}
  ];
  
  mouseX: number = 0;
  mouseY: number = 0;

  @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    }
}
