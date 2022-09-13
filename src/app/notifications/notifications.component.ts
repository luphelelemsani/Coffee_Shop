import { Component, OnInit, Input} from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  @Input() product!: Product;

  displayPoint(points: number) {
    alert(
      `Hey Best Customer, you have ${points} points from your purchase. Please keep supporting.:)`
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
