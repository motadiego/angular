import { Component, OnInit } from '@angular/core';
import { PlanetaService } from 'src/app/services/planeta-service.service';
import { Router } from '@angular/router';
import { Planeta } from 'src/app/model/Planeta.model';

@Component({
  selector: 'app-planeta',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  planetas: Planeta[];
  pageAtual;
  proximaPagina;
  paginaAnterior;
  page = 1;
  isProximaPagina = true;
  isPaginaAnterior = false;

  constructor(
    private planetaService: PlanetaService,
    private router: Router) { }

  async ngOnInit() {
    this.planetas = [];
    await this.listarTodos();
  }

  async listarTodos() {
    if (this.pageAtual === undefined) {
      await this.planetaService.getPlanetas().toPromise()
      .then(data => {
        this.planetas = data.results;
        this.proximaPagina = data.next;
        this.paginaAnterior = data.previous;
       }
      ).catch(error => console.log(error));
    } else {
      await this.planetaService.getObjectByUrl(this.pageAtual).toPromise()
      .then(data => {
        this.planetas = data.results;
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
