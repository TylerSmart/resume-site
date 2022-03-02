import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
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

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `github`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/github.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `instagram`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/instagram.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `twitter`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/twitter.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `linkedin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/linkedin.svg'
      )
    );
  }
}
