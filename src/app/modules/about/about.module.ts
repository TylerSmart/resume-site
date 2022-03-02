import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SkillComponent } from './components/skill/skill.component';

@NgModule({
  declarations: [AboutComponent, SkillComponent],
  imports: [CommonModule, SharedModule],
  exports: [AboutComponent],
})
export class AboutModule {}
