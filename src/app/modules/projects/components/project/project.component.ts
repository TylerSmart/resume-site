import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '../../models/project.model';
import { ImageCarouselDialogComponent } from '../image-carousel-dialog/image-carousel-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input('project') project!: Project;

  small$ = this.breakpointObserver.observe('(max-width: 832px)');

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openImageCarousel() {
    this.dialog.open(ImageCarouselDialogComponent, {
      data: this.project,
      width: '95vw',
    });
  }
}
