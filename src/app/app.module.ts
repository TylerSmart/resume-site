import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './modules/header/header.module';
import { HeroModule } from './modules/hero/hero.module';
import { AboutModule } from './modules/about/about.module';
import { CareerModule } from './modules/career/career.module';
import { ContactModule } from './modules/contact/contact.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { FooterModule } from './modules/footer/footer.module';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HeaderModule,
    HeroModule,
    AboutModule,
    CareerModule,
    ProjectsModule,
    ContactModule,
    FooterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
