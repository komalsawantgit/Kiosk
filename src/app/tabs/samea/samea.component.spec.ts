import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameaComponent } from './samea.component';

describe('SameaComponent', () => {
  let component: SameaComponent;
  let fixture: ComponentFixture<SameaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SameaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SameaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
