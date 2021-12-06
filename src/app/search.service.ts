import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public tag:any = "";
  private src = new BehaviorSubject(this.tag);
  currentTag = this.src.asObservable();

  constructor() { }

  search(tag:string){
    this.src.next(tag);
  }
}
