import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product?: Product;

  // Activated Router gives us access to the root params so we can get the root
  // we're activating and use this info 
  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.loadProduct()
  }

  loadProduct() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if(id) this.shopService.getProduct(+id).subscribe({
      next: product => this.product = product,
      error: error => console.log(error)
    })
  }
}
