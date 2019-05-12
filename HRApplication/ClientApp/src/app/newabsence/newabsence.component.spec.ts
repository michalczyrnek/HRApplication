/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewabsenceComponent } from './newabsence.component';

describe('NewabsenceComponent', () => {
  let component: NewabsenceComponent;
  let fixture: ComponentFixture<NewabsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewabsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
