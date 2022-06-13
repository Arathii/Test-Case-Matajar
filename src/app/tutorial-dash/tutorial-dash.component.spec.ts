import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDashComponent } from './tutorial-dash.component';

describe('TutorialDashComponent', () => {
  let component: TutorialDashComponent;
  let fixture: ComponentFixture<TutorialDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
