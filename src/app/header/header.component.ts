import { Component } from '@angular/core';
import { DataServiceService } from '../common-services/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
