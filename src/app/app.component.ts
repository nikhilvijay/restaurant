import { Component } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurant';
  filterStatus:boolean=false;

  constructor(private filterService:FilterService){}

  ngOnInit(){
    this.filterService.currentStatus.subscribe(status=> this.filterStatus = status);
  }
}
