import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input('project') project!: Project;

  small$ = this.breakpointObserver.observe('(max-width: 832px)');

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}
}
