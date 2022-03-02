import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume-site';

  public links = [
    {
      name: 'About',
      url: '#about',
    },

    {
      name: 'Career',
      url: '#career',
    },
    {
      name: 'Projects',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ];
}
