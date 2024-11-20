import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-form-search-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-search-category.component.html',
  styleUrl: './form-search-category.component.css'
})
export class FormSearchCategoryComponent {
  @Output() closeForm = new EventEmitter<void>();
  
  constructor(private categoryService : CategoryService) {

  }

  categoryForm: FormGroup = new FormGroup({
    root: new FormControl(""),
    after: new FormControl(""),
    before: new FormControl(""),
    pagination: new FormControl(""),
    sort: new FormControl(""),
    order: new FormControl(""),
  }); 

  submit() {
    console.log(this.categoryForm.value);
  }

  closeSearchCategoryForm() {
    this.closeForm.emit();
  }
}
