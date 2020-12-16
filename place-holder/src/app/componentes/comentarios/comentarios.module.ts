import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentariosComponent } from './comentarios.component';
import { GenericService } from 'src/app/services/generic-service.service';
import { ComentarioService } from 'src/app/services/comentario-service.service';



@NgModule({
  declarations: [ComentariosComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ComentariosComponent
  ],
  providers: [
    GenericService,
    ComentarioService
  ]
})
export class ComentariosModule { }
