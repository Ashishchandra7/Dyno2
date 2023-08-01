import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AddAuthorisedComponent } from '../add-authorised/add-authorised.component';
@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.scss']
})
export class PartAComponent {

  isEdit =true;
  isEditMode: boolean = false
  VisionValue='vision'
  DescriptionValue='write the Description'

  constructor(private popoverController: PopoverController){}
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AddAuthorisedComponent,
      event: ev,
      cssClass:'pop-over',
      translucent: true,
      componentProps: {
        isEditMode: this.isEditMode 
      }
    });
    return await popover.present();
  }

  EditClicked(){
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
