import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifSearchComponent } from './components/SearchComponent/gif.search.component';
import { GifGalleryComponent } from './components/GalleryComponent/gif.gallery.component';

const routes: Routes = [
  { path: '', redirectTo: '/findGif', pathMatch: 'full' },
  { path: 'findGif', component: GifSearchComponent },
  { path: 'gallery', component: GifGalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
