import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberReadmeComponent } from './barber-readme.component';

describe('BarberReadmeComponent', () => {
  let component: BarberReadmeComponent;
  let fixture: ComponentFixture<BarberReadmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarberReadmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarberReadmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
