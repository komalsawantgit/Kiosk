import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessSolnComponent } from './bussiness-soln.component';

describe('BussinessSolnComponent', () => {
  let component: BussinessSolnComponent;
  let fixture: ComponentFixture<BussinessSolnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessSolnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessSolnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
