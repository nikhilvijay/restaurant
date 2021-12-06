import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTag:string = '';

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  goBack(){
    history.back();
  }

  search(){
    this.searchService.search(this.searchTag);
  }
}
