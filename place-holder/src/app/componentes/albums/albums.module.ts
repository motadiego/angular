import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { GenericService } from 'src/app/services/generic-service.service';
import { AlbumService } from 'src/app/services/album-service.service';



@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AlbumsComponent
  ],
  providers: [
    GenericService,
    AlbumService
  ]
})
export class AlbumsModule { }
