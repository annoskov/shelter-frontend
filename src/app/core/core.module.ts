import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryShellComponent } from '../shell/entry-shell/entry-shell.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ContentContainerComponent } from '../shell/shell/content-container/content-container.component';
import { ShellComponent } from '../shell/shell/shell.component';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { AuthenticationService } from './authentication/authentication.service';

@NgModule({
  declarations: [
    EntryShellComponent,
    ShellComponent,
    ContentContainerComponent,
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
