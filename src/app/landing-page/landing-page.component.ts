import { Component } from '@angular/core';
import { DataServiceService } from '../common-services/data-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  dataReceving:any
  constructor(private Data:DataServiceService){

  }

  ngOnInit(){
 this.Data.Datadetail$.subscribe(data=>{
  if(data){
    this.dataReceving =data;
  }
  console.log(this.dataReceving);
  })
 
  
}

}
