import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }


  listarTodos(): Cliente[]{
    const clientes = localStorage['clientes'];
    return clientes ? JSON.parse(clientes) : [];
  }

  cadastrar(cliente: Cliente): void{
    const clientes = this.listarTodos();
    cliente.id = new Date().getTime();
    clientes.push(cliente);
    localStorage['clientes'] = JSON.stringify(clientes);
  }

  buscarPorId(id: number): Cliente {
    const clientes: Cliente[] = this.listarTodos();
    return clientes.find(cliente => cliente.id === id);
  }


  atualizar(cliente: Cliente): void{
    const clientes: Cliente[] = this.listarTodos();
    clientes.forEach((obj, index, objs) => {
      if (cliente.id === obj.id){
        objs[index] = cliente;
      }
    });
    localStorage['clientes'] = JSON.stringify(clientes);
  }

  remover(id: number): void {
    let clientes: Cliente[] =  this.listarTodos();
    clientes = clientes.filter(cliente => cliente.id !== id);
    localStorage['clientes'] = JSON.stringify(clientes);
  }
}
