import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  selectedCategory:string = '';
  restorantsCollection:any = {};
  searchTag:string = '';

  constructor(private restaurants:RestaurantsService, private router:Router, private searchService:SearchService) { }

  ngOnInit(): void {
    this.restaurants.getRestaurants().subscribe(res => this.restorantsCollection = res);
    this.searchService.currentTag.subscribe(tag=> this.searchTag = tag);
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
