import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SecondComponent } from '../second/second.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { StoreModule, Store  } from '@ngrx/store';
import { counterReducerLower, counterReducerHigher, initialStateLower, initialStateHigher } from '../store/reducers/counter-reducers';
import * as actions from '../store/actions/counter-actions';

  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstComponent, SecondComponent],
      imports: [
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        StoreModule.forRoot({
          countlower: counterReducerLower,
          counthigher: counterReducerHigher
        })],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initiate value -5 and 10', () => {
    const actualMinusFire = counterReducerLower(initialStateLower, {type: 'InitialLower'});
    const expectedMinusFive = -5;
    expect(actualMinusFire).toBe(expectedMinusFive);

    const actualPlusTen = counterReducerLower(initialStateHigher, {type: 'InitialHigher'});
    const expectedPlusTen = 10;
    expect(actualPlusTen).toBe(expectedPlusTen);
  });

  it('should have correct types for actions', () => {

    const expectedIncrementLower = new actions.IncrementLower().type;
    const expectedDecrementLower = new actions.DecrementLower().type;
    const expectedIncrementHigher = new actions.IncrementHigher().type;
    const expectedDecrementHigher = new actions.DecrementHigher().type;
    const expectIncrementHigherTwice = new actions.IncrementHigherTwice().type;

    const expectedInitialLower = new actions.InitialLower().type;
    const expectedInitialHigher  = new actions.InitialHigher().type;
    const expectedReset = new actions.Reset().type;
    const expectedStop = new actions.Stop().type;

    expect(new actions.IncrementLower().type).toEqual(expectedIncrementLower);
    expect(new actions.DecrementLower().type).toEqual(expectedDecrementLower);
    expect(new actions.IncrementHigher().type).toEqual(expectedIncrementHigher);
    expect(new actions.DecrementHigher().type).toEqual(expectedDecrementHigher);
    expect(new actions.IncrementHigherTwice().type).toEqual(expectIncrementHigherTwice);
    expect(new actions.InitialLower().type).toEqual(expectedInitialLower);
    expect(new actions.InitialHigher().type).toEqual(expectedInitialHigher);
    expect(new actions.Reset().type).toEqual(expectedReset);
    expect(new actions.Stop().type).toEqual(expectedStop);
  });
