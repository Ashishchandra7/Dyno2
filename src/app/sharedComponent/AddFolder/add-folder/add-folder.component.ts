import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.scss']
})
export class AddFolderComponent {

  constructor(private PopoverController: PopoverController){}

ngOnInit(){
  console.log(this.receivedData);
}

  @Input() receivedData: any;
  
  paths: string[] = ['Vision', 'stories', 'userInterface', 'scenario','parts'];

  
  toggleDropdown(){
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent?.classList.toggle("open")
  }

  Popup(){
    this.PopoverController.dismiss()
  }
}
