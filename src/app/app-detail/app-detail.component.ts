import { Component } from '@angular/core';
import { DataServiceService } from '../common-services/data-service.service';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.scss']
})
export class AppDetailComponent {
  dataReceving:any
  constructor(private Data:DataServiceService,private popoverController: PopoverController){

  }

  ngOnInit(){
 this.Data.Datadetail$.subscribe(data=>{
  if(data){
    this.dataReceving =data;
  }
  console.log(this.dataReceving);
  })
 
  
}

async presentPopover(ev: any) {
  const popover = await this.popoverController.create({
    component: PopoverComponent,
    event: ev,
    translucent: true
  });
  return await popover.present();
}

}
