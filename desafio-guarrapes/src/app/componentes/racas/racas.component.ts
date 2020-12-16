import { Component, OnInit } from '@angular/core';
import { RacaService } from 'src/app/services/raca-service.service';
import { Router } from '@angular/router';
import { Raca } from 'src/app/model/Raca.model';

@Component({
  selector: 'app-racas',
  templateUrl: './racas.component.html',
  styleUrls: ['./racas.component.css']
})
export class RacasComponent implements OnInit {

  racas: Raca[];
  pageAtual;
  proximaPagina;
  paginaAnterior;
  page = 1;
  isProximaPagina = true;
  isPaginaAnterior = false;

  constructor(
    private racaService: RacaService,
    private router: Router) { }

  async ngOnInit() {
    this.racas = [];
    await this.listarTodos();
  }

  async listarTodos() {
    if (this.pageAtual === undefined) {
      await this.racaService.getRacas().toPromise()
      .then(data => {
        this.racas = data.results;
        this.proximaPagina = data.next;
        this.paginaAnterior = data.previous;
       }
      ).catch(error => console.log(error));
    } else {
      await this.racaService.getObjectByUrl(this.pageAtual).toPromise()
      .then(data => {
        this.racas = data.results;
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
