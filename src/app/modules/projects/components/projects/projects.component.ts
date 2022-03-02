import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      name: 'Ember 2.0',
      description:
        'A restaurant management web app. Brands can build custom forms and reports that pull data from their POS and time keeping APIs. Data is compiled into custom KPI reports.',
      technologies: ['Azure', 'Angular', 'Express.js', 'MongoDB', 'CI/CD'],
      images: [],
    },
    {
      name: 'Swig Competition App',
      description:
        'A PWA designed for a soda shop company to manage and approve user submissions for different challenges. Designed to be appealing for the target audience and easy to manage for the moderation team.',
      technologies: [
        'Azure',
        'Angular',
        'Express.js',
        'Socket.io',
        'MongoDB',
        'CI/CD',
      ],
      images: [],
    },
    {
      name: 'Dibs 2.0',
      description:
        'An improved version of a scheduling app that integrates with Office 365. Displays scheduling data for rooms in the office.',
      technologies: ['Azure', 'PnP.js', 'Angular', 'Express.js'],
      images: [],
    },
    {
      name: 'Savory Fund Office Calendar',
      description:
        'A web app that displays different pages to visualize data about office events and ongoing. Runs locally on a Raspberry Pi.',
      technologies: ['Angular', 'PnP.js', 'Express.js', 'monday.com'],
      images: [],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
