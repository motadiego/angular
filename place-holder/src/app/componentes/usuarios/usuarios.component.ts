import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User.model';
import { UsuarioService } from 'src/app/services/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: User[];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
    ) { }

  async ngOnInit() {
    this.usuarios = [];
    sessionStorage.clear();
    await this.listarTodos();
  }

  async listarTodos() {
    await this.usuarioService.getUsuarios().toPromise()
      .then(data => {
        this.usuarios = data;
       }
      ).catch(error => console.log(error));
  }

  irParaPosts(idUsuario) {
    sessionStorage.setItem('idUsuario', idUsuario);
    this.router.navigate(['posts']);
  }

  irParaAlbums(idUsuario) {
    sessionStorage.setItem('idUsuario', idUsuario);
    this.router.navigate(['albums']);
  }
}
