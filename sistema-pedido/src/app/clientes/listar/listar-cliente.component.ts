import { Component, OnInit } from '@angular/core';
import { ClienteService, Cliente } from '../shared';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clientes = this.listaTodos();
  }

  listaTodos(): Cliente[] {
    return this.clienteService.listarTodos();
  }

  remover($event: any , cliente: Cliente): void {
    $event.preventDefault();
    if (confirm('Deseja remover o cliente "'+ cliente.nome + '"?')) {
      this.clienteService.remover(cliente.id);
      this.clientes = this.clienteService.listarTodos();
    }
  }

}
