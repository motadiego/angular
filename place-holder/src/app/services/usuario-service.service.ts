import { Injectable } from '@angular/core';
import { GenericService } from './generic-service.service';
import { Observable } from 'rxjs';
import { USUARIOS } from '../urls/config';
import { User } from '../model/User.model';


@Injectable({
  providedIn: 'root',
})

export class UsuarioService {
  constructor(private service: GenericService) { }

  getUsuarios(): Observable<any> {
    return this.service.get<any>(USUARIOS);
  }

  getUsuariosById(idUsuario): Observable<User[]> {
    const ENDPOINT = `/${idUsuario}`;
    return this.service.get<User[]>(USUARIOS + ENDPOINT);
  }
}
