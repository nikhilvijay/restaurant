import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from '../filter.service';
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
  filter:string = '';

  constructor(private restaurants:RestaurantsService, private router:Router, private searchService:SearchService, private filterService:FilterService) { }

  ngOnInit(): void {
    this.restaurants.getRestaurants().subscribe(res => this.restorantsCollection = res);
    this.searchService.currentTag.subscribe(tag=> this.searchTag = tag);
    this.filterService.currentTag.subscribe(flt=> this.filter = flt);
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
