import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService, Cliente } from '../shared';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  @ViewChild('formCliente', {static : true}) formCliente: NgForm;
  cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cliente = new Cliente(0,"","","","");
  }

  cadastrar(): void {
    if (this.formCliente.form.valid) {
      this.clienteService.cadastrar(this.cliente);
      this.router.navigate(["/clientes"]);
    }
  }
}
