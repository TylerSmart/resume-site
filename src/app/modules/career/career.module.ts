import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './components/career/career.component';

@NgModule({
  declarations: [CareerComponent],
  imports: [CommonModule],
  exports: [CareerComponent],
})
export class CareerModule {}
