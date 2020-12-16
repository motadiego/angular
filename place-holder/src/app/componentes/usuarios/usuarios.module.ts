import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { GenericService } from 'src/app/services/generic-service.service';
import { UsuarioService } from 'src/app/services/usuario-service.service';



@NgModule({
  declarations: [UsuariosComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UsuariosComponent
  ],
  providers: [
    GenericService,
    UsuarioService
  ]
})
export class UsuariosModule { }
