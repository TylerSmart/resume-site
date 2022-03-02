import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './components/career/career.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CareerComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [CareerComponent],
})
export class CareerModule {}
