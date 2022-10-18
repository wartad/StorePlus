import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any;
  constructor(private http: HttpClient) {
    this.products = [];
    this.http.get<any>('assets/fakeData.json').subscribe((res) => {
      this.products = res;
    });
  }

  ngOnInit(): void {}
}
