import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacasComponent } from './racas.component';
import { RacaService } from 'src/app/services/raca-service.service';
import { GenericService } from 'src/app/services/generic-service.service';



@NgModule({
  declarations: [RacasComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RacasComponent
  ],
  providers: [
    GenericService,
    RacaService
  ]
})
export class RacasModule { }
