import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftsListComponent } from './lifts-list.component';

describe('LiftsListComponent', () => {
  let component: LiftsListComponent;
  let fixture: ComponentFixture<LiftsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiftsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
