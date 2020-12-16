import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuariosModule } from './componentes/usuarios/usuarios.module';
import { HttpClientModule } from '@angular/common/http';
import { Routing } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './componentes/posts/posts.component';
import { PostsModule } from './componentes/posts/posts.module';
import { ComentariosModule } from './componentes/comentarios/comentarios.module';
import { AlbumsComponent } from './componentes/albums/albums.component';
import { AlbumsModule } from './componentes/albums/albums.module';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { FotosModule } from './componentes/fotos/fotos.module';


const appRoutingMain: Routes =  [
  {
    path: '**',
    redirectTo: 'usuarios'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    UsuariosModule,
    PostsModule,
    ComentariosModule,
    AlbumsModule,
    FotosModule,
    AppRoutingModule,
    Routing,
    RouterModule.forRoot(appRoutingMain)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
