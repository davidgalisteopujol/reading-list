import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCounterComponent } from './title-counter.component';

describe('TitleCounterComponent', () => {
  let component: TitleCounterComponent;
  let fixture: ComponentFixture<TitleCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleCounterComponent]
    });
    fixture = TestBed.createComponent(TitleCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
