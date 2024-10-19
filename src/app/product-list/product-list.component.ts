import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Output() productSelected = new EventEmitter<any>();

  products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 15 },
    { name: 'Product 3', price: 20 },
    { name: 'Product 4', price: 25 },
    { name: 'Product 5', price: 30 },
  ];

  filteredProducts = [...this.products];
  searchTerm = '';

  selectProduct(product: any) {
    this.productSelected.emit(product);
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => 
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}