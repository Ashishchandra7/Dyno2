import { Component } from '@angular/core';
import { CardDetailService } from '../common-services/card-detail.service';
import { CardDetail } from '../shared/card';
import { Router } from '@angular/router';
import { DataServiceService } from '../common-services/data-service.service';
import { SideNavServiceService } from '../common-services/side-nav-service.service';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  constructor(private cardDetail:CardDetailService, private router: Router ,private Data:DataServiceService,private sidemenu:SideNavServiceService){}

  cards:CardDetail[]=[];
  ngOnInit(){
    this.cards =this.cardDetail.getAll()
  }


  navigateTo(card:any) {
    console.log(card);
    this.sidemenu.updateMenuData(2)
  this.Data.getData(card);
      this.router.navigate([card.navigationUrl]);
   
  }


}
