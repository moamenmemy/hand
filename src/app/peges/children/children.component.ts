import { Component, HostListener, inject } from '@angular/core';
import { ProductService } from '../servier/product.service';
import { Product } from '../interface/product';
import productData from '../servier/children.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-children',
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {
_productService=inject(ProductService)
products: Product[] = productData;
router = inject(Router);

ngOnInit() {
  this._productService.getChildrenProducts().subscribe((data) => {
    this.products = data;
  });
}

  // Modal state
  isOpen = false;
  currentIndex = 0;

  // Open modal on click
  openModal(index: number) {
    this.currentIndex = index;
    this.isOpen = true;
  }

  // Close modal
  closeModal() {
    this.isOpen = false;
  }

  // Next / Prev
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
  }

  // Keyboard navigation
  @HostListener('window:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (!this.isOpen) return;
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'Escape') this.closeModal();
  }


  goBack(){
    this.router.navigate(['/products']);
  }

  gocontact(){
    this.router.navigate(['/contact']);
  }
}
