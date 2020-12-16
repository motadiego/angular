import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/Post.model';
import { PostService } from 'src/app/services/post-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(
    private postService: PostService,
    private router: Router) { }

  async ngOnInit() {
    this.posts = [];
    const idUsuario = sessionStorage.getItem('idUsuario');
    if (idUsuario !== undefined) {
     await this.recuperaPostsDoUsuario(idUsuario);
    }
  }

  async recuperaPostsDoUsuario(idUsuario) {
    await this.postService.getPostsByUsuario(idUsuario).toPromise()
    .then(data => {
      this.posts = data;
     }
    ).catch(error => console.log(error));
  }

  irParaComentarios(idPost) {
    sessionStorage.setItem('idPost', idPost);
    this.router.navigate(['comentarios']);
  }

  voltarListagemUsuarios() {
    this.router.navigate(['usuarios']);
  }


}
