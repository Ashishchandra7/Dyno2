import { Component } from '@angular/core';
import { PartsDetailsService } from '../common-services/parts-details.service';
import {partsDetails} from '../shared/Parts';
import { Router } from '@angular/router';
import { DataServiceService } from '../common-services/data-service.service';
import { SideNavServiceService } from '../common-services/side-nav-service.service';


@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent {

  parts:partsDetails[]=[]

  constructor(private partDetail:PartsDetailsService,private router:Router,Data:DataServiceService,private sidemenu:SideNavServiceService){}

  ngOnInit(){
    this.parts=this.partDetail.getAll()
  }

  navigate(part:any){
    console.log(part);
    this.sidemenu.updateMenuData(2)
    this.router.navigate([part.navigationUrl])
  }

}
