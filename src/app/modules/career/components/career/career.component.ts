import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  career = [
    {
      name: 'Software Engineer',
      organization: 'Savory Restaurant Fund',
      url: 'https://savory.mercatopartners.com/',
      start: 'January 2020',
      end: 'Present',
      notes: [
        'Maintained the existing learning management system, Ember. Managed the SharePoint hosting and database that powered the system. Collaborated with product owners to fix bugs and implement new features.',
        'Designed and developed a new restaurant management platform, Ember 2.0, using Angular, MongoDB, Node.js, Express.js, and Azure. Created a data pipeline using POS and time tracking APIs used by the portfolio brands. API integrations included Brink Par, Jolt, Toast, Harri, and others.',
        'Collaborated with Swig to create a PWA for a customer competition with a short deadline. Designed the application to be appealing for the user and to be easy to use. Implemented a system using Socket.io and Express.js to have multiple moderators review and approve submissions simultaneously.',
        "Provided various software solutions for departments to improve productivity and efficiency. Utilized data from Microsoft's Office 365 and monday.com APIs to create centralized office calendars and scheduling systems for rooms.",
      ],
    },
    {
      name: 'Implementation Consultant',
      organization: 'EnhanceHCM',
      url: 'https://enhancehcm.com/',
      start: 'August 2022',
      end: 'Present',
      notes: [
        'Produced solution to export sensitive employee information and documents from HR software to maintain compliance with new systems.',
      ],
    },
    {
      name: 'B.S. Software Engineering',
      organization: 'Utah Valley University',
      url: 'https://www.uvu.edu/catalog/current/departments/computer-science/software-engineering-bs/',
      start: 'August 2018',
      end: 'Present',
      notes: [
        'Expected to graduate in Fall 2022.',
        'Average overall GPA of 3.72.',
        'Electives included Web Programming, C# Software Development, and Java Software Development.',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
