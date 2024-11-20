import { Component } from '@angular/core';
import { FormCreateCategoryComponent } from '../form-create-category/form-create-category.component';
import { CommonModule } from '@angular/common';
import { FormSearchCategoryComponent } from '../form-search-category/form-search-category.component';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [FormCreateCategoryComponent, FormSearchCategoryComponent, CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  isCreateOpen: boolean = false;
  isSearchOpen: boolean = false;

  toggleCategoryCreateForm() {
    this.isCreateOpen = !this.isCreateOpen;
  }

  toggleCategorySearchForm() {
    this.isSearchOpen = !this.isSearchOpen;
  }
}
