import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  skills: { name: string; level: number }[] = [
    { name: 'JavaScript', level: 4 },
    { name: 'TypeScript', level: 4 },
    { name: 'Node.js', level: 4 },
    { name: 'Angular', level: 3 },
    { name: 'MongoDB', level: 3 },
    { name: 'Azure', level: 3 },
    { name: 'CI/CD', level: 2 },
    { name: 'Python', level: 2 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
