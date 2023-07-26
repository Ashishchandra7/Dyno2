import { Component } from '@angular/core';
import datapopup from '../../json/DataPopup.json';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-common-pop',
  templateUrl: './common-pop.component.html',
  styleUrls: ['./common-pop.component.scss']
})
export class CommonPopComponent {
  popupdata=datapopup;
isEditMode: any;
uploadedImageUrl: string | undefined;

  constructor(private PopoverController: PopoverController){}

  

  onFileSelected(event: any) {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = () => {
        this.uploadedImageUrl = reader.result as string;
      };
    }
  }

  ClosePopup(){
    this.PopoverController.dismiss()
  }
}
