import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-image-carousel-dialog',
  templateUrl: './image-carousel-dialog.component.html',
  styleUrls: ['./image-carousel-dialog.component.scss'],
})
export class ImageCarouselDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public project: Project) {}

  ngOnInit(): void {}
}
