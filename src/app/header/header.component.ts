import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { SearchService } from '../search.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTag:string = '';

  constructor(private searchService:SearchService, private filterService:FilterService) { }

  ngOnInit(): void {
  }

  goBack(){
    history.back();
  }

  search(){
    this.searchService.search(this.searchTag);
  }

  showFilter(){
    this.filterService.closeFilter(true);
  }
}
