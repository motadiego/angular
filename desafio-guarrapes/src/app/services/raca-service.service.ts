import { Injectable } from '@angular/core';
import { GenericService } from './generic-service.service';
import { Observable } from 'rxjs';
import { Raca } from '../model/Raca.model';
import { RACA } from '../urls/config';


@Injectable({
  providedIn: 'root',
})

export class RacaService {
  constructor(private service: GenericService) { }

  getRacas(): Observable<any> {
    return this.service.get<any>(RACA);
  }

  getObjectByUrl(url) {
    return  this.service.getFullUrl<any>(url);
  }


  getRacaById(id): Observable<Raca[]> {
    const ENDPOINT = `/${id}`;
    return this.service.get<Raca[]>(RACA + ENDPOINT);
  }
}
