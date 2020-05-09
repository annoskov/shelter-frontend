import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from './ui-components/app-button/app-button.component';
import { SliderComponent } from './ui-components/slider/slider.component';
import { RouterModule } from '@angular/router';
import { SliderDirective } from './ui-components/slider/slider.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppButtonComponent, SliderComponent, SliderDirective],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AppButtonComponent,
    SliderComponent,
    SliderDirective,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
