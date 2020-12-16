import { Component, OnInit } from '@angular/core';
import { Foto } from 'src/app/model/Foto.model';
import { FotoService } from 'src/app/services/foto-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  fotos: Foto[];
  idAlbum;

  constructor(
    private fotoService: FotoService,
    private router: Router
  ) { }


  async ngOnInit() {
    this.fotos = [];
    this.idAlbum = sessionStorage.getItem('idAlbum');
    if (this.idAlbum !== undefined){
     await this.recuperaFotosDoAlbum();
    }
  }

  async recuperaFotosDoAlbum() {
    await this.fotoService.getFotosByAlbum(this.idAlbum).toPromise()
    .then(data => {
      this.fotos = data;
     }
    ).catch(error => console.log(error));
  }

  voltarListagemAlbums() {
    sessionStorage.setItem('idAlbum', this.idAlbum);
    this.router.navigate(['albums']);
  }
}
