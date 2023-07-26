import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AddFolderComponent } from '../sharedComponent/AddFolder/add-folder/add-folder.component';
import AddFolder from './data1.json'

@Component({
  selector: 'app-add-folderpop',
  templateUrl: './add-folderpop.component.html',
  styleUrls: ['./add-folderpop.component.scss']
})
export class AddFolderpopComponent {

  constructor(private popoverController: PopoverController) {}
  items =AddFolder

  async AddnewFolder(item:any) {
    const popover = await this.popoverController.create({
      component:AddFolderComponent,
    
      cssClass:'pop-over',
      translucent: true,
      componentProps:
      {receivedData:item}
      
    });
    console.log(item.Name);
    return await popover.present();
  }

}
