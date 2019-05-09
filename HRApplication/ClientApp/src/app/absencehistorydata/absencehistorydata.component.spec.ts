/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AbsencehistorydataComponent } from './absencehistorydata.component';

describe('AbsencehistorydataComponent', () => {
  let component: AbsencehistorydataComponent;
  let fixture: ComponentFixture<AbsencehistorydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsencehistorydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsencehistorydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
