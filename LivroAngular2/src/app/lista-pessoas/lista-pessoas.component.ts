import { Component, OnInit } from '@angular/core';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {

  pessoas: string[];
  nome: string = "Diego";

  constructor(private service: PessoaService) { }

  ngOnInit(): void {
    this.pessoas = this.service.getPessoas();
  }

  enviarNome(){
    this.service.setPessoa(this.nome);
  }
}
