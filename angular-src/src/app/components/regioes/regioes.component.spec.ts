/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegioesComponent } from './regioes.component';

describe('RegioesComponent', () => {
  let component: RegioesComponent;
  let fixture: ComponentFixture<RegioesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegioesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegioesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
