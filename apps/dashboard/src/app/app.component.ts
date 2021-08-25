import { Component } from '@angular/core';

@Component({
  selector: 'exercises-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Exercises-Application';
  links = [
    { path: '/', icon: 'home', title: 'Login' },
    { path: 'lifts', icon: 'view_list', title: 'Lifts' },
  ];
}
