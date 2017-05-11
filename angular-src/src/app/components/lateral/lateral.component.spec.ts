/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LateralComponent } from './lateral.component';

describe('LateralComponent', () => {
  let component: LateralComponent;
  let fixture: ComponentFixture<LateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
