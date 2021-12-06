import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public filter:any = "";
  private src = new BehaviorSubject(this.filter);
  currentTag = this.src.asObservable();

  public filterStatus:any = false;
  private fltr = new BehaviorSubject(this.filterStatus);
  currentStatus = this.fltr.asObservable();

  constructor() { }

  filterChange(tag:string){
    this.src.next(tag);
  }

  closeFilter(status:boolean){
    this.fltr.next(status);
  }
}
