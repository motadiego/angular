import { Component, OnInit } from '@angular/core';
import { Nave } from 'src/app/model/Nave.model';
import { NaveService } from 'src/app/services/nave-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  naves: Nave[];
  pageAtual;
  proximaPagina;
  paginaAnterior;
  page = 1;
  isProximaPagina = true;
  isPaginaAnterior = false;

  constructor(
    private naveService: NaveService,
    private router: Router) { }

  async ngOnInit() {
    this.naves = [];
    await this.listarTodos();
  }

  async listarTodos() {
    if (this.pageAtual === undefined) {
      await this.naveService.getNaves().toPromise()
      .then(data => {
        this.naves = data.results;
        this.proximaPagina = data.next;
        this.paginaAnterior = data.previous;
       }
      ).catch(error => console.log(error));
    } else {
      await this.naveService.getObjectByUrl(this.pageAtual).toPromise()
      .then(data => {
        this.naves = data.results;
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
