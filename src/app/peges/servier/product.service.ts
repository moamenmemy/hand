import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { Observable, of } from 'rxjs';
import productData from '../servier/product.json';
import NapkinsData from '../servier/napkins.json';
import TrayData from '../servier/tray.json';
import ChilidernData from '../servier/children.json';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

 _httpClient=inject(HttpClient)

 getConcreteProducts():Observable<Product[]>{
  return of (productData as Product[]);
 }

 getNapkinsProducts():Observable<Product[]>{
  return of (NapkinsData as Product[]);
 }
  getTrayProducts():Observable<Product[]>{
    return of (TrayData as Product[]);
  }
getChildrenProducts():Observable<Product[]>{
  return of (ChilidernData as Product[]);
}
}
