import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PessoasModule } from './componentes/pessoas/pessoas.module';
import { HttpClientModule } from '@angular/common/http';
import { FilmesModule } from './componentes/filmes/filmes.module';
import { AppRoutingModule } from './app-routing.module';
import { Routing } from './app.routing';
import { Routes, RouterModule } from '@angular/router';
import { PlanetasModule } from './componentes/planetas/planetas.module';
import { RacasModule } from './componentes/racas/racas.module';
import { VeiculosModule } from './componentes/veiculos/veiculos.module';
import { NavesModule } from './componentes/naves/naves.module';

const appRoutingMain: Routes =  [
  {
    path: '**',
    redirectTo: 'pessoas'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    PessoasModule,
    FilmesModule,
    PlanetasModule,
    RacasModule,
    VeiculosModule,
    NavesModule,
    AppRoutingModule,
    Routing,
    RouterModule.forRoot(appRoutingMain)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
