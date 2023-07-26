import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Breadcrumb {
  label: string;
  url: string;
}
@Injectable({
  providedIn: 'root'
})
export class BreadcrumbServicesService {
private breadcrumbSubject = new BehaviorSubject<Breadcrumb[]>([])
  constructor() { }

  setBreadcrumbs(breadcrumbs:Breadcrumb[]):void{
    this.breadcrumbSubject.next(breadcrumbs);
  }

  getBreadcrumbs():BehaviorSubject<Breadcrumb[]>{
    return this.breadcrumbSubject;
  }
}
