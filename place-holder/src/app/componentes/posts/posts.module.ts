import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { GenericService } from 'src/app/services/generic-service.service';
import { PostService } from 'src/app/services/post-service.service';



@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PostsComponent
  ],
  providers: [
    GenericService,
    PostService
  ]
})
export class PostsModule { }
