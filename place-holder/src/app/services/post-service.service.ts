import { Injectable } from '@angular/core';
import { GenericService } from './generic-service.service';
import { Observable } from 'rxjs';
import { POSTS, POSTS_BY_USUARIO } from '../urls/config';
import { Post } from '../model/Post.model';


@Injectable({
  providedIn: 'root',
})

export class PostService {
  constructor(private service: GenericService) { }

  getPosts(): Observable<any> {
    return this.service.get<any>(POSTS);
  }

  getPostsByUsuario(idUsuario): Observable<Post[]> {
    const ENDPOINT = `${idUsuario}`;
    return this.service.get<Post[]>(POSTS_BY_USUARIO + ENDPOINT);
  }
}
