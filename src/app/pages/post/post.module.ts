import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
/* lo puse en plural aunque es un 'singular lol' post por error */
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
