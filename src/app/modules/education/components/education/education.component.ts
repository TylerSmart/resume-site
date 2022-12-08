import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  education = [
    {
      degree: 'B.S. Software Engineering',
      school: 'Utah Valley University',
      url: 'https://www.uvu.edu/catalog/current/departments/computer-science/software-engineering-bs/',
      start: 'Fall 2018',
      end: 'Fall 2022',
      notes: [
        'Average overall GPA of 3.72.',
        'Electives included Web Programming, C# Software Development, and Java Software Development.',
      ],
    },
  ];
}
