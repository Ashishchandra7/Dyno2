import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavServiceService {

  constructor() { }

   menuData = new BehaviorSubject<any>(1)


  updateMenuData(data:any){
    this.menuData.next(data);
  }
}
