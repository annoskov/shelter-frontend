import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from './links.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { LinksRoutingModule } from './links-routing.module';
import { LinkGroupsComponent } from './link-groups/link-groups.component';
import { LinkListingComponent } from './link-listing/link-listing.component';

@NgModule({
  declarations: [LinksComponent, LinkGroupsComponent, LinkListingComponent],
  entryComponents: [LinkGroupsComponent, LinkListingComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    LinksRoutingModule,
  ]
})
export class LinksModule { }
