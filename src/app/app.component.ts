import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngStyle & ngClass Attribute Directive';
  gender: string = 'female';

  constructor() {
  }

  AddStyle() {
    return {
      'font-size.px': 20,
      'font-style': 'italic',
      'color': 'green'
    }
  }

  AddClasses() {
    return {
      'btn-bold': true,
      'btn-italic': true,
      'btn-green': true
    }
  }
}