import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry/entry.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './shell/content/content.component';
import { ShellComponent } from './shell/shell.component';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { AuthenticationService } from './authentication/authentication.service';

@NgModule({
  declarations: [
    EntryComponent,
    ShellComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard
  ]
})
export class CoreModule { }
