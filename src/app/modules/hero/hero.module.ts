import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [HeroComponent],
})
export class HeroModule {}
