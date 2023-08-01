import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DashComponent } from './dash/dash.component';
import { ProductComponent } from './product/product.component';
import { PartsComponent } from './parts/parts.component';
import { ResourcesComponent } from './resources/resources.component';
import { SettingComponent } from './setting/setting.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { VisionComponent } from './sharedComponent/vision/vision.component';
import { StoriesComponent } from './sharedComponent/stories/stories.component';
import { UserInterfaceComponent } from './sharedComponent/user-interface/user-interface.component';
import { ScenarioComponent } from './sharedComponent/scenario/scenario.component';
import { PartComponent } from './sharedComponent/part/part.component';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { PartAComponent } from './sharedComponent/part-a/part-a.component';
import { SettingsComponent } from './sharedComponent/settings/settings.component';
import { PlanComponent } from './sharedComponent/plan/plan.component';
import { MakeComponent } from './sharedComponent/make/make.component';
import { UseComponent } from './sharedComponent/use/use.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: DashBoardComponent },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      { path: 'dash', component: DashComponent },
      {path:'product',component:ProductComponent},
      {path:'parts',component:PartsComponent,},
      {path:'Resources',component:ResourcesComponent},
      {path:'Settings',component:SettingComponent},
      {path:'landing',component:LandingPageComponent,children:[
        {path:'app-detail',component:AppDetailComponent},
        {path:'PartA',component:PartAComponent},
        {path:'plan',component:PlanComponent},
        {path:'make',component:MakeComponent},
        {path:'use',component:UseComponent},
        {path:'settings',component:SettingsComponent},
      ]},
      {path:'vision',component:VisionComponent},
      {path:'stories',component:StoriesComponent},
      {path:'userInterface',component:UserInterfaceComponent},
      {path:'Scenario',component:ScenarioComponent},
      {path:'part',component:PartComponent},
      // {path:'app-detail',component:AppDetailComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
