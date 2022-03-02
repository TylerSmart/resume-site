import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, SharedModule, MaterialModule],
  exports: [ContactComponent],
})
export class ContactModule {}
