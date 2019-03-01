import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudpressCreatorComponent } from './audpress-creator.component';

describe('AudpressCreatorComponent', () => {
  let component: AudpressCreatorComponent;
  let fixture: ComponentFixture<AudpressCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudpressCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudpressCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
