import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsDisplayComponent } from './parts-display.component';

describe('PartsDisplayComponent', () => {
  let component: PartsDisplayComponent;
  let fixture: ComponentFixture<PartsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
