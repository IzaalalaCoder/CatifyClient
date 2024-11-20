import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchCategoryComponent } from './form-search-category.component';

describe('FormSearchCategoryComponent', () => {
  let component: FormSearchCategoryComponent;
  let fixture: ComponentFixture<FormSearchCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSearchCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSearchCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
