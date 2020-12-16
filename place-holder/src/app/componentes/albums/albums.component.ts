import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/model/Album.model';
import { AlbumService } from 'src/app/services/album-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {


  albums: Album[];

  constructor(
    private albumService: AlbumService,
    private router: Router) { }

  async ngOnInit() {
    this.albums = [];
    const idUsuario = sessionStorage.getItem('idUsuario');
    if (idUsuario !== undefined) {
      await this.recuperaAlbumsDoUsuario(idUsuario);
    }
  }

  async recuperaAlbumsDoUsuario(idUsuario) {
    await this.albumService.getAlbumsByUsuario(idUsuario).toPromise()
    .then(data => {
      this.albums = data;
     }
    ).catch(error => console.log(error));
  }

  irParaFotos(idAlbum) {
    sessionStorage.setItem('idAlbum', idAlbum);
    this.router.navigate(['fotos']);
  }

  voltarListagemUsuarios() {
    this.router.navigate(['usuarios']);
  }
}
