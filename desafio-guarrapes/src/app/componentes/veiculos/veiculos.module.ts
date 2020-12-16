import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosComponent } from './veiculos.component';
import { GenericService } from 'src/app/services/generic-service.service';
import { VeiculoService } from 'src/app/services/veiculo-service.service';



@NgModule({
  declarations: [VeiculosComponent],
  imports: [
    CommonModule
  ],
  exports: [
    VeiculosComponent
  ],
  providers: [
    GenericService,
    VeiculoService
  ]
})
export class VeiculosModule { }
