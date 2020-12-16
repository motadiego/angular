import { Injectable } from '@angular/core';
import { GenericService } from './generic-service.service';
import { Observable } from 'rxjs';
import { PLANETA } from '../urls/config';
import { Planeta } from '../model/Planeta.model';


@Injectable({
  providedIn: 'root',
})

export class PlanetaService {
  constructor(private service: GenericService) { }

  getPlanetas(): Observable<any> {
    return this.service.get<any>(PLANETA);
  }

  getObjectByUrl(url) {
    return  this.service.getFullUrl<any>(url);
  }


  getPlanetaById(id): Observable<Planeta[]> {
    const ENDPOINT = `/${id}`;
    return this.service.get<Planeta[]>(PLANETA + ENDPOINT);
  }
}
