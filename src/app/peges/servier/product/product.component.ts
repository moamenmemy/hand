import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
router = inject(Router);

categories = [
  {
    title: 'منتجات الكونكريت',
    image: '/concrete/c1.jpeg',
    action: () => this.goToConcrete()
  },
  {
    title: 'منتجات مناديل القماش',
    image: '/napkins/n1.jpeg',
    action: () => this.goNapkins()
  },
  {
    title: 'منتجات صواني خطوبه وفرح',
    image: '/tray/t2.jpeg',
    action: () => this.goTray()
  },
  {
    title: 'منتجات سلوبتات البيبي',  
    image: '/children/ch3.jpeg',
    action: () => this.goChildren()
  }
];

goNapkins(){
  this.router.navigate(['/napkins']);
}

goToConcrete(){
  this.router.navigate(['/concrete']);
}

  goToSewing(){
    
  }

  goBack(){
    this.router.navigate(['/']);
  }
  goTray(){
    this.router.navigate(['/tray']);
  }

  goChildren(){
    this.router.navigate(['/children']);
  }

}
