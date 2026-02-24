import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CATEGORIES, PRODUCTS } from './data';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = CATEGORIES; 
  allProducts = PRODUCTS;
  selectedCategoryId: number | null = null;

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return this.allProducts;
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }

  deleteProductFromMain(id: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== id);
  }
}