import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  private Data = new BehaviorSubject<any>(null);
  Datadetail$ = this.Data.asObservable();

  getData(data:any){
    this.Data.next(data)
  }

}
