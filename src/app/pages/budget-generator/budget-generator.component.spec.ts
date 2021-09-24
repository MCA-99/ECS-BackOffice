import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetGeneratorComponent } from './budget-generator.component';

describe('BudgetGeneratorComponent', () => {
  let component: BudgetGeneratorComponent;
  let fixture: ComponentFixture<BudgetGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
