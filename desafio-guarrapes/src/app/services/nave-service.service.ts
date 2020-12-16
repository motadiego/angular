import { Injectable } from '@angular/core';
import { GenericService } from './generic-service.service';
import { Observable } from 'rxjs';
import { NAVE } from '../urls/config';
import { Nave } from '../model/Nave.model';


@Injectable({
  providedIn: 'root',
})

export class NaveService {
  constructor(private service: GenericService) { }

  getNaves(): Observable<any> {
    return this.service.get<any>(NAVE);
  }

  getObjectByUrl(url) {
    return  this.service.getFullUrl<any>(url);
  }


  getNaveById(id): Observable<Nave[]> {
    const ENDPOINT = `/${id}`;
    return this.service.get<Nave[]>(NAVE + ENDPOINT);
  }
}
