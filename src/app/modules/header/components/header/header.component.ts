import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDrawerContent, MatSidenavContent } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('showHide', [
      state(
        'hide',
        style({
          top: '-64px',
        })
      ),
      state(
        'show',
        style({
          top: '0px',
          'box-shadow': '0px 0px 8px 8px #21212187',
        })
      ),
      transition('* <=> *', [animate('500ms ease-in-out')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input('links') links: { name: string; url: string }[] = [];
  @Input('container') container?: MatSidenavContent;

  @Output('drawer') drawer = new EventEmitter();

  show$ = new BehaviorSubject<boolean>(true);
  private oldScroll: number = 1;

  mobile$ = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(public breakpointObserver: BreakpointObserver) {
    this.show$.subscribe(console.log);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const element = this.container?.getElementRef().nativeElement;

    if (element) {
      element.onscroll = (_) => {
        if (this.oldScroll > element.scrollTop) {
          // Scrolling up
          if (this.show$.value !== true) {
            this.show$.next(true);
          }
        } else {
          // Scrolling down
          if (this.show$.value !== false) {
            this.show$.next(false);
          }
        }

        this.oldScroll = element.scrollTop;
      };

      element.onmouseover = (event: MouseEvent) => {
        if (event.clientY < 100) {
          if (this.show$.value !== true) {
            this.show$.next(true);
          }
        }
      };
    }
  }
}
