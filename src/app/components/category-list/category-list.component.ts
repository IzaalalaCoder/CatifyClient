import { Component, Input } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CategoryComponent, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
  providers: [CategoryService]
})
export class CategoryListComponent {
  @Input({
    required: true,
    alias: 'cats'
  }) categories : any[] = []; 
}
