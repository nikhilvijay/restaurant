import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filter:string = "All";

  constructor(private filterService:FilterService) { }

  ngOnInit(): void {
  }

  changeFilter(filter:string){
    this.filter = filter;
  }

  closeFilter(){
    this.filterService.closeFilter(false);
  }

  submit(){
    this.filterService.filterChange(this.filter == "All" ? "" : this.filter);
    this.closeFilter();
  }
}
