import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponentComponent implements OnInit {
  cartCount: any=[]
  totalCount: any;
  object:any
  constructor(private dataServiceService: DataServiceService) {

  }
  ngOnInit() {

    this.dataServiceService.countCartElement().subscribe(
      (response: any) => {
        this.cartCount = response;
        this.totalCount = this.getCount(response)
      },
      (error) => {
        console.error('Error fetching elements:', error);
      }
    );
  }

  getCount(item: any) {
    let totlaItem = 0;
    for (let i = 0; i < item.length; i++) {
      totlaItem += item[i]['elementCartCount']

    }
    return totlaItem;
  }

}
