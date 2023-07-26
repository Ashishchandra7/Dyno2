import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CommonPopComponent } from '../sharedComponent/common-pop/common-pop.component';
import datapopup from '../../app/json/DataPopup.json'
import { PeopleComponent } from '../sharedComponent/people/people.component';
import { TagComponent } from '../sharedComponent/tag/tag.component';
import { LinkedComponent } from '../sharedComponent/linked/linked.component';
import { FolderComponent } from '../sharedComponent/folder/folder.component';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {

 Datapopup=datapopup;

  constructor(private popoverController: PopoverController) {}

  @Input() isEditMode:boolean = false

  async DocPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CommonPopComponent,
      event: ev,
      cssClass:'pop-over',
      translucent: true,
      componentProps: {
        isEditMode: this.isEditMode 
      }
    });
    return await popover.present();
  }
  async PeoplePopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PeopleComponent,
      event: ev,
      cssClass:'pop-over',
      translucent: true,
      componentProps: {
        isEditMode: this.isEditMode 
      }
    });
    return await popover.present();
  }

  async TagPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: TagComponent,
      event: ev,
      cssClass:'pop-over',
      translucent: true,
      componentProps: {
        isEditMode: this.isEditMode 
      }
    });
    return await popover.present();
  }

  async linkedPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LinkedComponent,
      event: ev,
      cssClass:'pop-over',
      translucent: true,
      componentProps: {
        isEditMode: this.isEditMode 
      }
    });
    return await popover.present();
  }
  async FolderPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: FolderComponent,
      event: ev,
      cssClass:'pop-over',
      translucent: true,
      componentProps: {
        isEditMode: this.isEditMode 
      }
    });
    return await popover.present();
  }
  optionSelected(data:any)
  {
this.popoverController.dismiss();
  }

}
