import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-paginated-list',
  standalone: true,
  imports: [CategoryComponent, CommonModule],
  templateUrl: './category-paginated-list.component.html',
  styleUrls: ['./category-paginated-list.component.css']
})
export class CategoryPaginatedListComponent {
  @Input() searchData: any = {};
  @Output() searchResponse = new EventEmitter<any>();

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    console.log('Données reçues pour les catégories paginées:', this.searchData);  // Pour le debug
  }

  get categories() {
    return this.searchData.response?.categories || [];
  }

  get totalPages() {
    return this.searchData.response?.totalPages || 1;
  }

  get currentPage() {
    return this.searchData.response?.currentPage || 0;
  }

  goToPreviousPage() {
    if (this.currentPage > 0) {
      this.searchData.response.currentPage--;
      this.updateSearchResults();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.searchData.response.currentPage++;
      this.updateSearchResults();
    }
  }

  updateSearchResults() {
    const { root, after, before, sort, order } = this.searchData.params;
    const currentPage = this.searchData.response.currentPage;
    this.categoryService.searchCategories(
      currentPage, root, after, before, order, sort
    ).subscribe(
      (categoriesSearch) => {
        this.searchData.response = categoriesSearch;
        this.searchResponse.emit(categoriesSearch);
      }
    );
  }

}
