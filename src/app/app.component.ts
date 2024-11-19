import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryService } from './services/category.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CategoryService]
})
export class AppComponent implements OnInit {
  title = 'Catify';

  categories: any[] = [];

  constructor(private categoryService : CategoryService) {

  }

  ngOnInit(): void {
    console.log("hehe");
    this.categoryService.getCategories().subscribe((datas) => {
      this.categories = datas;
      console.log(datas);
    });
  }
}
