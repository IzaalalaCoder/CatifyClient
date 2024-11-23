import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() searchResponse = new EventEmitter<any>();
  @Output() returnHome = new EventEmitter<any>();

  toggleCategoryCreateForm() {
    this.isCreateOpen = !this.isCreateOpen;
  }

  toggleCategorySearchForm() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  gainedResponse(data: any) {
    const result = {
      response: data.searchResponse,
      params: data.searchParams
    };
    this.searchResponse.emit(result);
  }

  goToHomePage() {
    this.returnHome.emit();
  }
}
