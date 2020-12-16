import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetasComponent } from './planetas.component';
import { GenericService } from 'src/app/services/generic-service.service';
import { PlanetaService } from 'src/app/services/planeta-service.service';



@NgModule({
  declarations: [PlanetasComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PlanetasComponent
  ],
  providers: [
    GenericService,
    PlanetaService
  ]
})
export class PlanetasModule { }
