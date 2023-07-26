import { Component } from '@angular/core';

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.scss']
})
export class PartAComponent {

  isEdit =true;
  isEditMode: boolean = false
  DescriptionValue='write the Description'

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
