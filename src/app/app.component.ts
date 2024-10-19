import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductListComponent } from './product-list/product-list.component';
import { NumberPadComponent } from './number-pad/number-pad.component';
import { DisplaySectionComponent } from './display-section/display-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, ProductListComponent, NumberPadComponent, DisplaySectionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedProducts: any[] = [];
  total: number = 0;

  onProductSelected(product: any) {
    this.selectedProducts.push({ ...product, quantity: 1 });
    this.calculateTotal();
  }

  onNumberEntered(number: number) {
    if (this.selectedProducts.length > 0) {
      const lastProduct = this.selectedProducts[this.selectedProducts.length - 1];
      lastProduct.quantity = parseInt(`${lastProduct.quantity}${number}`);
      this.calculateTotal();
    }
  }

  onClear() {
    this.selectedProducts = [];
    this.total = 0;
  }

  private calculateTotal() {
    this.total = this.selectedProducts.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  }
}