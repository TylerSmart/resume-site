import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FooterComponent],
})
export class FooterModule {}
