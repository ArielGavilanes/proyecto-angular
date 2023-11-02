import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AccordionComponent,
    
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    RouterModule
  ]
})
export class GalleryModule { }
