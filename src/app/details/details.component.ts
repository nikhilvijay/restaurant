import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  details:any = {};
  menuData:any = {};

  constructor(private route:ActivatedRoute, private restaurant:RestaurantsService, private router:Router) { }

  ngOnInit(): void {
    this.restaurant.getDetails(this.route.snapshot.params['id']).subscribe(res=>this.details = res);
    //this.restaurant.getMenu().subscribe(res=>this.menuData = res);
    this.restaurant.getMenu().subscribe(res=>this.menuData = res);
  }

  goBack(){alert();
    history.back();
  }
}
