import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/Comment.model';
import { ComentarioService } from 'src/app/services/comentario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  comentarios: Comment[];
  idPost;

  constructor(
    private comentarioService: ComentarioService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.comentarios = [];
    this.idPost = sessionStorage.getItem('idPost');
    if (this.idPost !== undefined){
     await this.recuperaComentarirosDoPost();
    }
  }

  async recuperaComentarirosDoPost() {
    await this.comentarioService.getComentariosByPost(this.idPost).toPromise()
    .then(data => {
      this.comentarios = data;
     }
    ).catch(error => console.log(error));
  }

  voltarListagemPosts() {
    sessionStorage.setItem('idPost', this.idPost);
    this.router.navigate(['posts']);
  }

}
