import { Component } from '@angular/core';
import { FormCreateCategoryComponent } from '../form-create-category/form-create-category.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [FormCreateCategoryComponent, CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  isOpen: boolean = false;

  toggleCategoryCreateForm() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }
}
