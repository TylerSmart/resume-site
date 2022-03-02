import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  @Input('name') name: string = 'Skill';
  @Input('level') level: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
