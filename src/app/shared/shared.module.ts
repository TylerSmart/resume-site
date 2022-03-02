import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecorativeSquaresComponent } from './components/decorative-squares/decorative-squares.component';

@NgModule({
  declarations: [DecorativeSquaresComponent],
  imports: [CommonModule],
  exports: [DecorativeSquaresComponent],
})
export class SharedModule {}
