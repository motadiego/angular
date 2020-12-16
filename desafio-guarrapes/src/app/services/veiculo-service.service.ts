import { Injectable } from '@angular/core';
import { GenericService } from './generic-service.service';
import { Observable } from 'rxjs';
import { VEICULO } from '../urls/config';
import { Veiculo } from '../model/Veiculo.model';


@Injectable({
  providedIn: 'root',
})

export class VeiculoService {
  constructor(private service: GenericService) { }

  getVeiculos(): Observable<any> {
    return this.service.get<any>(VEICULO);
  }

  getObjectByUrl(url) {
    return  this.service.getFullUrl<any>(url);
  }


  getVeiculoById(id): Observable<Veiculo[]> {
    const ENDPOINT = `/${id}`;
    return this.service.get<Veiculo[]>(VEICULO + ENDPOINT);
  }
}
