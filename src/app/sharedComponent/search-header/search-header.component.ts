import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AddFolderpopComponent } from 'src/app/add-folderpop/add-folderpop.component';
import { AddNewpopComponent } from 'src/app/add-newpop/add-newpop.component';
import { PopoverComponent } from 'src/app/popover/popover.component';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent {
  constructor(private popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AddNewpopComponent,
      cssClass:'pop-over',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async AddPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AddFolderpopComponent,
      event: ev,
      cssClass:'pop-over',
      translucent: true
    });
    return await popover.present();
  }

}
