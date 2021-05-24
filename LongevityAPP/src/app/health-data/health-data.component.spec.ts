import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDataComponent } from './health-data.component';

describe('HealthDataComponent', () => {
  let component: HealthDataComponent;
  let fixture: ComponentFixture<HealthDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
