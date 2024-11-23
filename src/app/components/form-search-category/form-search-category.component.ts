import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form-search-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-search-category.component.html',
  styleUrl: './form-search-category.component.css',
  providers: [DatePipe]
})
export class FormSearchCategoryComponent {
  @Output() closeForm = new EventEmitter<void>();
  @Output() searchResponse = new EventEmitter<any>();

  categoryForm: FormGroup = new FormGroup({
    root: new FormControl(false),
    after: new FormControl(""),
    before: new FormControl(""),
    pagination: new FormControl(0),
    sort: new FormControl(""),
    order: new FormControl(""),
  });

  constructor(private categoryService: CategoryService, private datePipe: DatePipe) {}

  submit() {
    const formValue = this.categoryForm.value;
    formValue.after = this.transformDate(formValue.after);
    formValue.before = this.transformDate(formValue.before);

    this.categoryService.searchCategories(
      formValue.pagination,
      formValue.root,
      formValue.after,
      formValue.before,
      formValue.order,
      formValue.sort
    ).subscribe((categoriesSearch) => {
      this.searchResponse.emit({
        searchResponse: categoriesSearch,
        searchParams: formValue
      });
      this.closeSearchCategoryForm();
    });
  }

  transformDate(date: Date) {
    return date == null ? null : this.datePipe.transform(date, 'dd-MM-yyyy');
  }

  closeSearchCategoryForm() {
    this.closeForm.emit();
  }
}
