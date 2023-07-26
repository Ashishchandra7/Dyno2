import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashComponent } from './dash/dash.component';
import { ProductComponent } from './product/product.component';
import { PartsComponent } from './parts/parts.component';
import { ResourcesComponent } from './resources/resources.component';
import { SettingComponent } from './setting/setting.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuComponent } from './menu/menu.component';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { SearchHeaderComponent } from './sharedComponent/search-header/search-header.component';
import { SearchBarComponent } from './sharedComponent/search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { VisionComponent } from './sharedComponent/vision/vision.component';
import { StoriesComponent } from './sharedComponent/stories/stories.component';
import { UserInterfaceComponent } from './sharedComponent/user-interface/user-interface.component';
import { ScenarioComponent } from './sharedComponent/scenario/scenario.component';
import { PartComponent } from './sharedComponent/part/part.component';
import { FolderDetailComponent } from './sharedComponent/folder-detail/folder-detail.component';
import { LastModificationComponent } from './sharedComponent/last-modification/last-modification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverComponent } from './popover/popover.component';
import { AddNewpopComponent } from './add-newpop/add-newpop.component';
import { AddFolderpopComponent } from './add-folderpop/add-folderpop.component';
import { CommonPopComponent } from './sharedComponent/common-pop/common-pop.component';
import { TagComponent } from './sharedComponent/tag/tag.component';
import { PeopleComponent } from './sharedComponent/people/people.component';
import { LinkedComponent } from './sharedComponent/linked/linked.component';
import { FolderComponent } from './sharedComponent/folder/folder.component';
import { AddFolderComponent } from './sharedComponent/AddFolder/add-folder/add-folder.component';
import { UploadCommonFolderComponent } from './sharedComponent/uploadFolder/upload-common-folder/upload-common-folder.component';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchBarDropdownComponent } from './sharedComponent/search-bar-dropdown/search-bar-dropdown.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PartAComponent } from './sharedComponent/part-a/part-a.component';
@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HomePageComponent,
    HeaderComponent,
    SidenavComponent,
    DashComponent,
    ProductComponent,
    PartsComponent,
    ResourcesComponent,
    SettingComponent,
    LandingPageComponent,
    MenuComponent,
    AppDetailComponent,
    SearchHeaderComponent,
    SearchBarComponent,
    FooterComponent,
    VisionComponent,
    StoriesComponent,
    UserInterfaceComponent,
    ScenarioComponent,
    PartComponent,
    FolderDetailComponent,
    LastModificationComponent,
    PopoverComponent,
    AddNewpopComponent,
    AddFolderpopComponent,
    CommonPopComponent,
    TagComponent,
    PeopleComponent,
    LinkedComponent,
    FolderComponent,
    AddFolderComponent,
    UploadCommonFolderComponent,
    SearchBarDropdownComponent,
    PartAComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
