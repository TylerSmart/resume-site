import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './components/education/education.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EducationComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [EducationComponent],
})
export class EducationModule {}
