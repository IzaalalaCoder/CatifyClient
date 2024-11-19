import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input({
    required: true,
    alias: 'cat'
  }) category : Category = new Category(); 
}
