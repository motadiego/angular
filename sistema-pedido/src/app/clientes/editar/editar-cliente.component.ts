import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService, Cliente } from '../shared';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  @ViewChild('formCliente', {static : true}) formCliente: NgForm;
  cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.cliente = this.clienteService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formCliente.form.valid) {
      this.clienteService.atualizar(this.cliente);
      this.router.navigate(["/clientes"]);
    }
  }
}
