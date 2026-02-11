import { Component, HostListener, inject } from '@angular/core';
import { ProductService } from '../servier/product.service';
import { Product } from '../interface/product';
import NapkinsData from '../servier/napkins.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-napkins',
  imports: [],
  templateUrl: './napkins.component.html',
  styleUrl: './napkins.component.scss'
})
export class NapkinsComponent {
_productService=inject(ProductService)
products: Product[] = NapkinsData;
router = inject(Router);
ngOnInit() {
  this._productService.getNapkinsProducts().subscribe((data) => {
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
