import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringFormularyComponent } from './filtering-formulary.component';

describe('FilteringFormularyComponent', () => {
  let component: FilteringFormularyComponent;
  let fixture: ComponentFixture<FilteringFormularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteringFormularyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteringFormularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
