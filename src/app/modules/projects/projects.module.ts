import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ProjectsComponent, ProjectComponent],
  imports: [CommonModule, SharedModule, MaterialModule],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
