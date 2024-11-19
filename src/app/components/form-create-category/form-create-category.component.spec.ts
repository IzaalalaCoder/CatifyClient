import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateCategoryComponent } from './form-create-category.component';

describe('FormCreateCategoryComponent', () => {
  let component: FormCreateCategoryComponent;
  let fixture: ComponentFixture<FormCreateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
