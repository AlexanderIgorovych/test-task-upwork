import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponent } from './second.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FirstComponent } from '../first/first.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { counterReducerLower, counterReducerHigher } from '../store/reducers/counter-reducers';

describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondComponent, FirstComponent],
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
