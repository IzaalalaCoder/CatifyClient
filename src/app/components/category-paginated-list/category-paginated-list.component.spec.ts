import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPaginatedListComponent } from './category-paginated-list.component';

describe('CategoryPaginatedListComponent', () => {
  let component: CategoryPaginatedListComponent;
  let fixture: ComponentFixture<CategoryPaginatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPaginatedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryPaginatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
