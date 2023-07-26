import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import sidemenu from '../../app/json/sidemenu.json'
import sideBar from '../../app/json/sideBar.json'
import { SideNavServiceService } from '../common-services/side-nav-service.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sideMenu =sidemenu;
  sideBar = sideBar;
  labl=1;
  
  buttons: {
    imageUrl: string;
    action: () => void;
  }[];

  constructor(private router: Router, private sideNav:SideNavServiceService) {
    this.buttons = [
      {
        imageUrl: '../../assets/Group 290.png',
        action: () => this.nav('home/dash')
      },
      {
        imageUrl: '../../assets/Group 303.png',
        action: () => this.nav('home/product')
      },
      {
        imageUrl: '../../assets/Group 291.png',
        action: () => this.nav('home/parts')
      },
      {
        imageUrl: '../../assets/Group 382.png',
        action: () => this.nav('home/Resources')
      },
      {
        imageUrl: '../../assets/Group 288.png',
        action: () => this.nav('home/Settings')
      }
    ];
  }

  ngOnInit(): void {
    this.nav();
    this.sideNav.menuData.subscribe(data=>{
      console.log(data);
      this.labl=data;
    })
  }

  nav(route?: string): void {
    if (route) {
      this.router.navigate([route]);
    } else {
      this.router.navigate(['home/dash']);
    }
  }


  navigateTo(menu:any){
    if(menu){
     this.router.navigate([menu.navigation])
    }
  }

  goBack(){
    this.sideNav.updateMenuData(1)
    this.router.navigate(['home/dash'])
  }

  

}
