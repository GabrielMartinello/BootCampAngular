import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  constructor( public router: Router) { }
  @Input() filter = '';
  @Output() filterOutput = new EventEmitter<string>();

  filterSub = new Subject<string>();

  ngOnInit(): void {
    this.filterSub.subscribe(e => {
      this.filterOutput.emit(e);
    });
  }
  onKey($event: KeyboardEvent): any {
  return ($event.target as HTMLInputElement).value;
  }

  ngOnDestroy(): void {
    this.filterSub.unsubscribe();
  }

}
