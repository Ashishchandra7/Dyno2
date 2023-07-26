import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SideNavServiceService } from 'src/app/common-services/side-nav-service.service';
import { PopoverComponent } from 'src/app/popover/popover.component';
import multimenu from '../../json/multimenu.json'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-folder-detail',
  templateUrl: './folder-detail.component.html',
  styleUrls: ['./folder-detail.component.scss']
})
export class FolderDetailComponent {

  constructor(private popoverController: PopoverController,private router: Router, private sideNav:SideNavServiceService) {}
  isEdit =true;
  isEditMode: boolean = false
  Multimenu=multimenu;
  VisionValue='vision'
  DescriptionValue='write the Description'
 



  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      cssClass:'pop-over',
      translucent: true,
      componentProps: {
        isEditMode: this.isEditMode 
      }
    });
    return await popover.present();
  }

  EDitClicked(){
    this.isEdit=false
    this.isEditMode= true
   
  }

  saveBtn(){
    this.isEdit=!this.isEdit
    this.isEditMode= false
  }

  closeBtn(){
    this.isEdit=!this.isEdit
    this.isEditMode= true
  }
}
