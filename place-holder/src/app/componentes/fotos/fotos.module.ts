import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotosComponent } from './fotos.component';
import { GenericService } from 'src/app/services/generic-service.service';
import { FotoService } from 'src/app/services/foto-service.service';



@NgModule({
  declarations: [FotosComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FotosComponent
  ],
  providers: [
    GenericService,
    FotoService
  ]
})
export class FotosModule { }
