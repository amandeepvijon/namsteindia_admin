import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ],
  declarations: [
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    FooterComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
