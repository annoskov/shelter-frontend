import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry.component';
import {MaterialModule} from "../shared/material.module";
import {LandingComponent} from "./landing/landing.component";
import {EntryRoutingModule} from "./entry-routing.module";



@NgModule({
  declarations: [EntryComponent, LandingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    EntryRoutingModule,
  ]
})
export class EntryModule { }
