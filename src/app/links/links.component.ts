import { Component, OnInit } from '@angular/core';
import { SliderComponentInstance } from '../shared/ui-components/slider/slider.component';
import { LinkGroupsComponent } from './link-groups/link-groups.component';
import { LinkListingComponent } from './link-listing/link-listing.component';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  readonly sliderComponens: SliderComponentInstance[] = [
    {
      instance: LinkListingComponent,
    },
    {
      instance: LinkGroupsComponent,
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
