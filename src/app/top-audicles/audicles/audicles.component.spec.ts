import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiclesComponent } from './audicles.component';

describe('AudiclesComponent', () => {
  let component: AudiclesComponent;
  let fixture: ComponentFixture<AudiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
