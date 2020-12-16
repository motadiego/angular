import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoService } from 'src/app/services/veiculo-service.service';
import { Veiculo } from 'src/app/model/Veiculo.model';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  veiculos: Veiculo[];
  pageAtual;
  proximaPagina;
  paginaAnterior;
  page = 1;
  isProximaPagina = true;
  isPaginaAnterior = false;

  constructor(
    private veiculoService: VeiculoService,
    private router: Router) { }

  async ngOnInit() {
    this.veiculos = [];
    await this.listarTodos();
  }

  async listarTodos() {
    if (this.pageAtual === undefined) {
      await this.veiculoService.getVeiculos().toPromise()
      .then(data => {
        this.veiculos = data.results;
        this.proximaPagina = data.next;
        this.paginaAnterior = data.previous;
       }
      ).catch(error => console.log(error));
    } else {
      await this.veiculoService.getObjectByUrl(this.pageAtual).toPromise()
      .then(data => {
        this.veiculos = data.results;
        this.proximaPagina = data.next;
        this.paginaAnterior = data.previous;
       }
      ).catch(error => console.log(error));
    }
  }

  paginaInicial() {
    this.router.navigate(['pessoas']);
  }

  proximo() {
    this.pageAtual = this.proximaPagina;
    if (this.pageAtual !== null) {
      this.page++;
      this.ngOnInit();
      this.isProximaPagina = true;
      this.isPaginaAnterior = true;
      return true;
    }
    this.isProximaPagina = false;
    return false;
  }

  anterior() {
    this.pageAtual = this.paginaAnterior;
    if (this.pageAtual !== null) {
      this.page--;
      this.ngOnInit();
      this.isPaginaAnterior = true;
      this.isProximaPagina = true;
      return true;
    }
    this.isPaginaAnterior = false;
    return false;
  }

}
