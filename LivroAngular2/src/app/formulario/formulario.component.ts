import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contato = new Contato("Thiago","(99)99999-9999","email@email.com");

  constructor() { }

  ngOnInit(): void {
  }

  enviarDados(): void {
    alert('Seu nome é:' + this.contato.nome);
    alert('Seu telefone é:' + this.contato.telefone);
    alert('Seu email é:' + this.contato.email);
  }
}
