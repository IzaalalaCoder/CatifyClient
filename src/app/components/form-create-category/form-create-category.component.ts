import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-form-create-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-create-category.component.html',
  styleUrl: './form-create-category.component.css'
})
export class FormCreateCategoryComponent {

  @Output() closeForm = new EventEmitter<void>();

  constructor(private categoryService : CategoryService) {

  }

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl(""),
  }); 

  submit() {
    const category : Category = new Category();

    category.name = this.categoryForm.value.name;
    console.log(this.categoryForm.value);

    this.categoryService.createCategories(category);
  }

  closeCategoryForm() {
    this.closeForm.emit();
  }
}
