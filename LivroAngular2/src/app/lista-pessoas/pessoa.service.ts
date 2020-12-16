import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  nomePessoas: string[] = ['JOÃO' , 'MARIA' , 'ANGULAR', 'Thiago'];

  constructor() { }

  getPessoas(): string[] {
    return this.nomePessoas;
  }

  setPessoa(nome: string) {
    this.nomePessoas.push(nome);
  }
}
