import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FeaturesComponent } from './components/features/features.component';
import { PriceComponent } from './components/price/price.component';
import { BootupComponent } from './components/bootup/bootup.component';
import { FollowersComponent } from './components/followers/followers.component';
import { ConfigService } from './services/config.service';
import { PostsModule } from './modules/posts/posts.module';

const routes: Routes = [
  { path: 'features', component: FeaturesComponent},
  { path: 'price', component: PriceComponent},
  { path: 'followers', component: FollowersComponent}
];

@NgModule({
  declarations: [
    BootupComponent,FeaturesComponent, PriceComponent, BootupComponent, FollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ConfigService],
  bootstrap: [BootupComponent]
})
export class AppModule { }