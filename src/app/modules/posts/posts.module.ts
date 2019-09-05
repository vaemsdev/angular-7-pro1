import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetpostComponent } from './getpost/getpost.component';
import { Routes, RouterModule } from '@angular/router';
import { ViewpostComponent } from './viewpost/viewpost.component';

const postRoutes : Routes = [
  {path : 'posts/:id' , component : ViewpostComponent },
  {path : 'posts' , component : GetpostComponent }
]
@NgModule({
  declarations: [ GetpostComponent, ViewpostComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(postRoutes)
  ]
})
export class PostsModule { 
  
}