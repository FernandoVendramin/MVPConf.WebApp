import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;    
    this.products = [];
    return this.http.get<Product[]>(`${environment.baseUrl}api/product`)
      .subscribe((data: Product[]) => {
        setTimeout(() => {
          this.products = data;
          this.loading = false;
          console.log(this.products);
        }, 1000);
      });
  }
}
