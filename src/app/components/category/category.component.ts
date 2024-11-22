import { CategoryService } from './../../services/category.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Category } from '../../models/category.model';
import { FormEditCategoryComponent } from '../form-edit-category/form-edit-category.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormEditCategoryComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input({
    required: true,
    alias: 'cat'
  }) category : Category = new Category();

  parentCategory: any = {};
  isEditOpen : boolean =  false;
  editMode : string = ""

  constructor(private categoryService : CategoryService) {

  }

  ngOnInit(): void {
    if (this.category.parentId != null) {
      this.categoryService.getSpecificCategorie(this.category.parentId).subscribe((datas) => {
        this.parentCategory = datas;
      });
    }
  }

  addSubCategory(id : number) {

  }

  removeCategory(id : number) {
    this.categoryService.removeCategory(id).subscribe();
  }

  getSpecificCategory(id : number) {
    if (id == -1) {
      return;
    }
    return this.categoryService.getSpecificCategorie(id).subscribe();
  }

  toggleCategoryEditForm(id : number, edit : string = "") {
    if (id == -1) {
      return;
    }
    this.isEditOpen = !this.isEditOpen;
    this.editMode = this.isEditOpen ? edit : "";
  }

  unlinkCategory(parentId : number, childId : number) {
    return this.categoryService.unlinkCategory(parentId, childId).subscribe();
  }

  linkCategory(parentId : number, childId : number) {
    return this.categoryService.linkCategory(parentId, childId).subscribe();
  }

}
