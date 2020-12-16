import { Injectable } from '@angular/core';
import { GenericService } from './generic-service.service';
import { Observable } from 'rxjs';
import { ALBUMS, ALBUMS_BY_USUARIO} from '../urls/config';
import { Album } from '../model/Album.model';


@Injectable({
  providedIn: 'root',
})

export class AlbumService {
  constructor(private service: GenericService) { }

  getAlbums(): Observable<any> {
    return this.service.get<any>(ALBUMS);
  }

  getAlbumsByUsuario(idUsuario): Observable<Album[]> {
    const ENDPOINT = `${idUsuario}`;
    return this.service.get<Album[]>(ALBUMS_BY_USUARIO + ENDPOINT);
  }
}
