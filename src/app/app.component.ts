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


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiBEmsAG9ySqhzlajSl_ZAf_zDdRe8pNk",
  authDomain: "tyler-smart.firebaseapp.com",
  databaseURL: "https://tyler-smart-default-rtdb.firebaseio.com",
  projectId: "tyler-smart",
  storageBucket: "tyler-smart.appspot.com",
  messagingSenderId: "201710751692",
  appId: "1:201710751692:web:e85ff2f3e171632e3e5769",
  measurementId: "G-KPPN6MY24X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);