import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-edit-category',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-edit-category.component.html',
  styleUrls: ['./form-edit-category.component.css']
})
export class FormEditCategoryComponent implements OnInit {
  @Input() category: any = [];
  @Input() editMode: string = "";
  @Output() closeForm = new EventEmitter<void>();
  @Output() update = new EventEmitter<void>();

  categories: any[] = [];
  childrens: any[] = [];

  categoryParentForm: FormGroup = new FormGroup({
    parent: new FormControl(""),
  });

  categoryNameForm: FormGroup = new FormGroup({
    name: new FormControl(""),
  });

  categoryChildsForm: FormGroup = new FormGroup({
    childs: new FormControl(""),
  });

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((datas) => {
      this.categories = datas;
    });

    this.categoryService.getChildrenOfCategory(this.category.id != null ? this.category.id : -1).subscribe((datas) => {
      this.childrens = datas;
    });

    if (this.category) {
      this.categoryParentForm.patchValue({
        parent: this.category.parentId || ''
      });

      this.categoryNameForm.patchValue({
        name: this.category.name
      });
    }
  }

  submit(id : number) {
    switch(this.editMode){
      case "name":
        this.categoryService.updateNameCategory(id, this.categoryNameForm.value).subscribe(() => {
          this.update.emit();
          this.closeForm.emit();
        });
        break;
      case "parent":
        this.categoryService.linkCategory(this.categoryParentForm.value.parent, id).subscribe(() => {
          this.update.emit();
          this.closeForm.emit();
        });
        break;
      case "childs":
        this.categoryService.linkCategory(id, this.categoryChildsForm.value.childs).subscribe(() => {
          this.update.emit();
          this.closeForm.emit();
        });
        break;
    }
  }

  validCategories() {
    return this.categories.filter(c =>
      c.id !== this.category.id && !this.childrens.some(child => child.id === c.id)
    );
  }

  closeCategoryForm() {
    this.closeForm.emit();
  }
}
