import { Injectable } from '@angular/core';
import { GenericService } from './generic-service.service';
import { Observable } from 'rxjs';
import { FOTOS_BY_ALBUM, FOTOS} from '../urls/config';
import { Foto } from '../model/Foto.model';


@Injectable({
  providedIn: 'root',
})

export class FotoService {
  constructor(private service: GenericService) { }

  getfotos(): Observable<any> {
    return this.service.get<any>(FOTOS);
  }

  getFotosByAlbum(idAlbum): Observable<Foto[]> {
    const ENDPOINT = `${idAlbum}`;
    return this.service.get<Foto[]>(FOTOS_BY_ALBUM + ENDPOINT);
  }
}
