import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as actions from '../store/actions/counter-actions';
import { interval } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, AfterContentChecked {

  countLower: Observable<number>;
  countHigher: Observable<number>;

  countCurrentLower = null;
  countCurrentHigher = null;

  subscription: Subscription;

  showLower: number;
  showHigher: number;

  constructor(private store: Store<{ count: number }>) {
    this.countLower = store.pipe(select('countlower'));
    this.countHigher = store.pipe(select('counthigher'));
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    this.store.pipe(select('countlower')).subscribe(resLower => {
      this.countCurrentLower = resLower;
      this.showLower = resLower;
    });

    this.store.pipe(select('counthigher')).subscribe(resHigher => {
      this.countCurrentHigher = resHigher;
      this.showHigher = resHigher;
    });

  }

  incrementLower() {
    this.store.dispatch(new actions.IncrementLower());
  }

  decrementLower() {
    this.store.dispatch(new actions.DecrementLower());
  }

  incrementHigher() {
    this.store.dispatch(new actions.IncrementHigher());
  }

  decrementHigher() {
    this.store.dispatch(new actions.DecrementHigher());
  }

  startAction() {
   this.subscription = interval(1000).subscribe(() => {
    this.store.dispatch(new actions.IncrementLower());
    this.store.dispatch(new actions.IncrementHigherTwice());
    });
  }

  stopAction() {
    this.subscription.unsubscribe();
  }

  resetAction() {
    this.stopAction();
    this.store.dispatch(new actions.InitialLower());
    this.store.dispatch(new actions.InitialHigher());
  }
}
