import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifSearchComponent } from './components/SearchComponent/gif.search.component';
import { GifGalleryComponent } from './components/GalleryComponent/gif.gallery.component';
import { LoginComponent } from './components/LoginComponent/login-component.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/findGif', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'findGif', component: GifSearchComponent, canActivate: [AuthGuard]},
  { path: 'gallery', component: GifGalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
