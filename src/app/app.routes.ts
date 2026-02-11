import { Routes } from '@angular/router';
import { HeroComponent } from './features/hero/hero.component';
import { ProductComponent } from './peges/servier/product/product.component';
import { ConcreteComponent } from './peges/concrete/concrete.component';

export const routes: Routes = [
 { path: '', component: HeroComponent },
 {path:'products',component:ProductComponent},
 {path:'concrete',component:ConcreteComponent}
];
