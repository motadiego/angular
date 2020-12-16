import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesComponent } from './naves.component';
import { GenericService } from 'src/app/services/generic-service.service';
import { NaveService } from 'src/app/services/nave-service.service';



@NgModule({
  declarations: [NavesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavesComponent
  ],
  providers: [
    GenericService,
    NaveService
  ]
})
export class NavesModule { }
