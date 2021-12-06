import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  selectedCategory:string = '';
  restorantsCollection:any = {};

  constructor(private restaurants:RestaurantsService, private router:Router) { }

  ngOnInit(): void {
    this.restaurants.getRestaurants().subscribe(res => this.restorantsCollection = res);
  }

  navigate(arg:number){
    this.router.navigateByUrl('/detailed/'+arg);
  }

  changeCategory(category:string){
    if(category ==  this.selectedCategory)
      this.selectedCategory = '';
    else
      this.selectedCategory = category;
  }
}
