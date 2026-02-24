import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() delete = new EventEmitter<number>();

  like() {
    this.product.likes++;
  }

  remove() {
  console.log('Кнопка нажата в карточке для ID:', this.product.id);
  this.delete.emit(this.product.id);
}

  shareToWhatsApp() {
    const url = `https://wa.me/?text=${this.product.link}`;
    window.open(url, '_blank');
  }

  shareToTelegram() {
    const url = `https://t.me/share/url?url=${this.product.link}`;
    window.open(url, '_blank');
  }
}