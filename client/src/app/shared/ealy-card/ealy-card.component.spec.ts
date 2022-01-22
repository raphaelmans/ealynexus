import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EalyCardComponent } from './ealy-card.component';

describe('EalyCardComponent', () => {
  let component: EalyCardComponent;
  let fixture: ComponentFixture<EalyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EalyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EalyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
