import { Injectable } from '@angular/core';
import { GenericService } from './generic-service.service';
import { Observable } from 'rxjs';
import { COMENTARIOS, COMENTARIOS_BY_POST} from '../urls/config';
import { Comment } from '../model/Comment.model';


@Injectable({
  providedIn: 'root',
})

export class ComentarioService {
  constructor(private service: GenericService) { }

  getComentarios(): Observable<any> {
    return this.service.get<any>(COMENTARIOS);
  }

  getComentariosByPost(idPost): Observable<Comment[]> {
    const ENDPOINT = `${idPost}`;
    return this.service.get<Comment[]>(COMENTARIOS_BY_POST + ENDPOINT);
  }
}
