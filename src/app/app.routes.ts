import { Routes } from '@angular/router';
import { HeroComponent } from './features/hero/hero.component';
import { ProductComponent } from './peges/servier/product/product.component';
import { ConcreteComponent } from './peges/concrete/concrete.component';
import { ContactComponent } from './peges/contact/contact.component';
import { NapkinsComponent } from './peges/napkins/napkins.component';
import { ChildrenComponent } from './peges/children/children.component';
import { TrayComponent } from './peges/tray/tray.component';

export const routes: Routes = [
 { path: '', component: HeroComponent },
 {path:'products',component:ProductComponent},
 {path:'concrete',component:ConcreteComponent},
 {path:'contact',component:ContactComponent},
 {path:'napkins',component:NapkinsComponent},
 {path:'children',component:ChildrenComponent},
 {path:'tray',component:TrayComponent}
];
