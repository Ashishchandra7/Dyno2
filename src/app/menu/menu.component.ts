import { Component } from '@angular/core';
import mutimenu from '../json/multimenu.json'
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private router: Router){}
  multimenuData = mutimenu;
  show = false;

  NavigateTo(menu:any){
    if(menu){
      this.router.navigate([menu.navigationUrl])
    }
  }

  SwitchTab(){
    this.router.navigate(['home/landing'])
  }

  toggleFolder( menu:any){
   this.multimenuData.forEach((eve: any) => {
    if(eve !== menu){
      eve.subItems = false 
    }
    eve.subItems = !eve.subItems
   })

  }

}
