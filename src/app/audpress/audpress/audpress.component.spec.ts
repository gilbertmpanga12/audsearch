import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudpressComponent } from './audpress.component';

describe('AudpressComponent', () => {
  let component: AudpressComponent;
  let fixture: ComponentFixture<AudpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
