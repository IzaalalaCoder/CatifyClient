import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryService } from './services/category.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CategoryListComponent, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Catify';

  categories: any[] = [];

  constructor(private categoryService : CategoryService) {

  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((datas) => {
      this.categories = datas;
    });
  }
}
