import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterLinkActive, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLinkActive,
    
  ]
})
export class SharedModule { }
