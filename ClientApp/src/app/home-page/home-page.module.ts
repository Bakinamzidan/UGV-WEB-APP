import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ImagesSliderComponent } from './images-slider/images-slider.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ImagesSliderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
